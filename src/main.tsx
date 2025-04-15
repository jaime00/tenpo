import { createRoot } from 'react-dom/client';

import App from '@/App';

import '@/index.css';
import '@/styles/general.css';
import '@/styles/tailwind.css';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(<App />);
