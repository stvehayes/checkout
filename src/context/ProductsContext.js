import React, { createContext, useState } from 'react';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(0);

  return (
    <ProductsContext.Provider value={{ selectedProduct, setSelectedProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, ProductsContext };
