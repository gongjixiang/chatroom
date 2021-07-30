export const localData = {
  getItem(n) {
    return JSON.parse(localStorage.getItem(n));
  },
  setItem(n, v) {
    localStorage.setItem(n, JSON.stringify(v));
  },
  remove(n) {
    localStorage.removeItem(n);
  },
  clear() {
    localStorage.clear();
  }
};
