import { subscribe } from 'valtio/vanilla';

import * as templates from '../../example/template.js';
import { state } from '../model.js';
import { applyI18nTexts } from './helpers/render.js';
import { renderError } from './watchers/render-error.js';
import { renderFeeds } from './watchers/render-feeds.js';
import { renderFormState } from './watchers/render-form-state.js';
import { renderLoading } from './watchers/render-loading.js';
import { renderPosts } from './watchers/render-posts.js';
import { renderUpdateError } from './watchers/render-update-error.js';

const initView = () => {
  const container = document.getElementById('app');
  container.innerHTML = templates.main;
  applyI18nTexts();

  // Render initial form state inside the dark section
  renderFormState('neutral');

  subscribe(state, () => {
    renderLoading(state.isLoading);
    renderFormState(state.formState);
    renderError(state.errors);
    renderFeeds(state.feeds);
    renderPosts(state.posts);
    renderUpdateError(state.updateError);
  });
};

export { initView };
