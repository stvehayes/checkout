import React, { createContext, useState } from 'react';
import { product } from '../data/Data';

const CadenceContext = createContext();

const CadenceProvider = ({ children }) => {
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
