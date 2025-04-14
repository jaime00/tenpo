export const getValueFromSessionStorage = (prop: string) => {
  return sessionStorage.getItem(prop);
};

export const setValueInSessionStorage = (prop: string, value: string) => {
  sessionStorage.setItem(prop, value);
};

export const dropValueFromSessionStorage = (prop: string) => {
  sessionStorage.removeItem(prop);
};
