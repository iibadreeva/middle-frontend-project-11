import { handleSubmit } from '../controller.js';
import { state } from '../model.js';
import { getInput } from './helpers/dom.js';

export const bindFormEvents = () => {
  const form = document.querySelector('.rss-form');
  const input = getInput();
  if (form) form.addEventListener('submit', handleSubmit);

  // console.log('feed', JSON.parse(JSON.stringify(state.feeds)));
  // console.log('posts', JSON.parse(JSON.stringify(state.posts)));
  if (input) {
    input.addEventListener('input', e => {
      state.inputValue = e.target.value;
    });
    // Restore current value after template swap
    input.value = state.inputValue;
  }
};
