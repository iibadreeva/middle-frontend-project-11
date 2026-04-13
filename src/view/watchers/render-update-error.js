import { i18n } from '../../i18n.js';
import { getFeedback } from '../helpers/dom.js';

export const renderUpdateError = updateError => {
  const feedback = getFeedback();
  if (!feedback) return;

  if (updateError) {
    feedback.textContent = i18n.t(`errors.${updateError}`);
  } else {
    // Only clear if this watcher put the message there (no form error active)
    if (feedback.textContent === i18n.t('errors.networkError')) {
      feedback.textContent = '';
    }
  }
};
