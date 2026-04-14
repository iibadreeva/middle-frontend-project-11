export const AUTO_UPDATE_INTERVAL = 1000 * 5
export const FETCH_TIMEOUT = 1000 * 30

export const buildApiUrl = url =>
    `https://allorigins.hexlet.app/get?disableCache=true&url=${encodeURIComponent(url)}`
