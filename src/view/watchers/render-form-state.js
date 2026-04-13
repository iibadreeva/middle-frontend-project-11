import * as templates from '../../../example/template.js';
import { bindFormEvents } from '../bind-form-events.js';
import { getFormRow } from '../helpers/dom.js';
import { applyI18nTexts } from '../helpers/render.js';

const templateMap = {
  neutral: templates.neutral,
  error: templates.error,
  successful: templates.successful,
};

let lastFormState = null;

export const renderFormState = formState => {
  if (formState === lastFormState) return;
  lastFormState = formState;

  const row = getFormRow();
  if (!row) return;

  row.innerHTML = templateMap[formState] ?? templates.neutral;
  applyI18nTexts();
  bindFormEvents();
};
