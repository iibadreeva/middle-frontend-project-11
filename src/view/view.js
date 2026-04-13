import { subscribe } from 'valtio/vanilla';

import * as templates from '../../example/template.js';
import { state } from '../model.js';
import { applyI18nTexts } from './helpers/render.js';
import { focusInput } from './watchers/focus-input.js';
import { renderError } from './watchers/render-error.js';
import { renderFormState } from './watchers/render-form-state.js';
import { renderLoading } from './watchers/render-loading.js';

const initView = () => {
  const container = document.getElementById('app');
  container.innerHTML = templates.main;
  applyI18nTexts();

  // Render initial form state inside
  renderFormState('neutral');

  subscribe(state, () => {
    renderFormState(state.formState);
    renderError(state.errors);
    renderLoading(state.isLoading);
    if (state.formState === 'successful') {
      focusInput();
    }
  });
};

export { initView };
