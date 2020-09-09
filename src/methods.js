export const windowClickEventListener = {
  add(cb) {
    window.addEventListener("click", cb);
  },
  remove(cb) {
    window.removeEventListener("click", cb);
  },
};

