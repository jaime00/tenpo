const FAKE_USERNAME = import.meta.env.VITE_APP_FAKE_USERNAME || '';
const FAKE_PASSWORD = import.meta.env.VITE_APP_FAKE_PASSWORD || '';
const FAKE_EMAIL = import.meta.env.VITE_APP_FAKE_EMAIL || '';

const enviroment = {
  FAKE_USERNAME,
  FAKE_PASSWORD,
  FAKE_EMAIL,
};

export default enviroment;
