// --- DOM helpers ---

export const getFormRow = () => document.querySelector('.js-form');
export const getFeeds = () => document.querySelector('.js-feeds');
export const getInput = () => document.getElementById('url-input');
export const getFeedback = () => document.querySelector('.feedback');
export const getModalBody = () => document.querySelector('.js-modal-body');
export const getModalTitle = () => document.querySelector('.js-modal-title');
export const getModalLink = () => document.querySelector('.js-modal-link');
export const getModal = () => document.querySelector('.modal');
export const getPostItem = id => document.querySelector(`a[data-id="${id}"]`);
