export const TOKEN_KEY = "token";
export const THEME_KEY = "theme";

export function setItemStorage(key, value) {
  localStorage.setItem(key, value);
}

export function getItemFromStorage(key) {
  const item = localStorage.getItem(key);

  return item;
}

export function getTokenFromStorage() {
  const token = localStorage.getItem(TOKEN_KEY);

  return token;
}

export function removeItemFromStorage(key) {
  localStorage.removeItem(key);
}

