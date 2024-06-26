import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './reset.css';
import { SeatsProvider } from './context/SeatsContext';
import { CadenceProvider } from './context/CadenceContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CadenceProvider>
      <SeatsProvider>
        <App />
      </SeatsProvider>
    </CadenceProvider>
  </StrictMode>
);
