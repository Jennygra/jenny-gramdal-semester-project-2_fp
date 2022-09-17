const tokenKey = "token";
const userKey = "user";

export function saveToken(token) {
  saveToStarage(tokenKey, token);
}

export function saveUser(user) {
  saveToStarage(userKey, user);
}

export function getUserName() {
  const user = getFromStorage(userKey);

  if (user) {
    return user.username;
  }

  return null;
}

function saveToStarage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
  const value = localStorage.getItem(key);

  if (!value) {
    return [];
  }

  return JSON.parse(value);
}
