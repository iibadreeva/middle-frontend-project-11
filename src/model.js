import { proxy } from 'valtio/vanilla';

// State stores error codes, not translated text.
// View translates codes via i18n.t(`errors.${code}`)
const state = proxy({
  inputValue: '',
  errors: {},
  isLoading: false,
  links: [],
  feeds: [],
  posts: [],
  formState: 'neutral', // 'neutral' | 'error' | 'successful'
});

const clearForm = () => {
  state.inputValue = '';
  state.errors = {};
  state.formState = 'successful';
};

const addFeed = ({ feed, posts, url }) => {
  state.links = [...state.links, url];
  state.posts = [...state.posts, ...posts];
  state.feeds = [...state.feeds, feed];
  return { feed, posts, url };
};

export { state, clearForm, addFeed };
