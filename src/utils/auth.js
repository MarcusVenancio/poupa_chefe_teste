import * as storage from '../utils/storage.js';

export const isAuthenticated = () => {
  return storage.getTokenFromStorage() !== null ? true : false;
}
