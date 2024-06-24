import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './reset.css';
import { SeatsProvider } from './context/SeatsContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <SeatsProvider>
      <App />
    </SeatsProvider>
  </StrictMode>
);
