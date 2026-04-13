import axios from 'axios';
import { Modal } from 'bootstrap';
import * as yup from 'yup';

import { addFeed, clearForm, state } from './model.js';
import { getFeedAndPostsFromRssDocument } from './utils/get-feed-and-posts-from-rss-document.js';
import { parseXmlDocument } from './utils/parse-xml-document.js';
import { getModal } from './view/helpers/dom.js';
import { renderModal } from './view/watchers/render-modal.js';

const AUTO_UPDATE_INTERVAL = 1000 * 5;
const FETCH_TIMEOUT = 1000 * 30;

const buildApiUrl = url =>
  `https://allorigins.hexlet.app/get?disableCache=true&url=${encodeURIComponent(url)}`;

// Returns a schema that yields error *codes* (set via yup.setLocale in i18n.js)
const getSchema = () => yup.object({ url: yup.string().required().url() });

const validateSchema = url =>
  getSchema()
    .validate({ url }, { abortEarly: true })
    .then(() => url)
    .catch(err => Promise.reject(new Error(err.message)));

const checkDuplicate = url =>
  state.links.includes(url) ? Promise.reject(new Error('duplicate')) : Promise.resolve(url);

const fetchFeed = url =>
  axios
    .get(buildApiUrl(url), { timeout: FETCH_TIMEOUT })
    .then(response => {
      if (!response.data?.contents) return Promise.reject(new Error('networkError'));
      return parseXmlDocument(response.data.contents);
    })
    .then(xmlDoc => getFeedAndPostsFromRssDocument(xmlDoc, url))
    .catch(err => {
      if (err.message === 'networkError') return Promise.reject(err);
      return Promise.reject(new Error('networkError'));
    });

const handleSubmit = e => {
  e.preventDefault();
  const { inputValue } = state;

  state.errors = {};
  state.isLoading = true;
  state.formState = 'neutral';

  validateSchema(inputValue)
    .then(checkDuplicate)
    .then(fetchFeed)
    .then(addFeed)
    .then(clearForm)
    .catch(err => {
      state.errors = { url: err.message };
      state.formState = 'error';
    })
    .finally(() => {
      state.isLoading = false;
    });
};

// --- Auto-update ---

const isPostNew = post =>
  !state.posts.some(existing => existing.link === post.link && existing.title === post.title);

const fetchNewPosts = url =>
  axios
    .get(buildApiUrl(url), { timeout: FETCH_TIMEOUT })
    .then(response => {
      if (!response.data?.contents) return [];
      return parseXmlDocument(response.data.contents);
    })
    .then(xmlDoc => getFeedAndPostsFromRssDocument(xmlDoc, url))
    .then(({ posts }) => posts.filter(isPostNew))
    .catch(() => null); // null signals a fetch error for this url

const checkForNewPosts = () =>
  Promise.all(state.links.map(fetchNewPosts)).then(results => {
    const hadError = results.some(r => r === null);
    const newPosts = results.filter(Boolean).flat();

    if (newPosts.length > 0) {
      state.posts = [...newPosts, ...state.posts];
    }

    state.updateError = hadError ? 'networkError' : null;
  });

const startAutoUpdate = () => {
  const tick = () => {
    checkForNewPosts().finally(() => setTimeout(tick, AUTO_UPDATE_INTERVAL));
  };
  setTimeout(tick, AUTO_UPDATE_INTERVAL);
};

const handlePostClick = btn => {
  const id = btn?.dataset?.id;
  const post = state.posts.find(item => item.id === id);
  if (!post || !id) return;

  renderModal(post, id);

  const modalElement = getModal();
  if (!modalElement) return;

  const modal = Modal.getOrCreateInstance(modalElement);
  modal.show();
};

const handleCloseModal = () => {
  const modalElement = getModal();
  if (!modalElement) return;

  const modal = Modal.getOrCreateInstance(modalElement);
  modal.hide();
};

export { handleSubmit, startAutoUpdate, handlePostClick, handleCloseModal };
