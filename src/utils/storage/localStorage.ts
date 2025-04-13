export const getPropFromLocalStorage = (prop: string) => {
  return localStorage.getItem(prop);
};

export const setPropInLocalStorage = (prop: string, value: string) => {
  localStorage.setItem(prop, value);
};

export const removePropFromLocalStorage = (prop: string) => {
  localStorage.removeItem(prop);
};
