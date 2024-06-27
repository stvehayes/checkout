import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './reset.css';
import { SeatsProvider } from './context/SeatsContext';
import { CadenceProvider } from './context/CadenceContext';
import { ProductsProvider } from './context/ProductsContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ProductsProvider>
      <CadenceProvider>
        <SeatsProvider>
          <App />
        </SeatsProvider>
      </CadenceProvider>
    </ProductsProvider>
  </StrictMode>
);
