import { createContext, useContext, useState } from 'react';
import { products } from '../data/Data';
import { ProductsContext } from './ProductsContext';

const CadenceContext = createContext();

const CadenceProvider = ({ children }) => {
  const { selectedProduct } = useContext(ProductsContext);
  const product = products[selectedProduct];
  const [cadence, setCadence] = useState(product.cadence || 'monthly');

  const updateCadence = (type) => {
    setCadence(type);
  };

  return (
    <CadenceContext.Provider value={{ cadence, updateCadence }}>
      {children}
    </CadenceContext.Provider>
  );
};

export { CadenceProvider, CadenceContext };
