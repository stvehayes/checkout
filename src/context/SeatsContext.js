import { createContext, useContext, useState } from 'react';
import { products } from '../data/Data';
import { ProductsContext } from './ProductsContext';

const SeatsContext = createContext();

const SeatsProvider = ({ children }) => {
  const { selectedProduct } = useContext(ProductsContext);
  const product = products[selectedProduct];
  const [seats, setSeats] = useState(product.seats);

  const updateSeats = (num) => {
    setSeats(num);
  };

  return (
    <SeatsContext.Provider value={{ seats, updateSeats }}>
      {children}
    </SeatsContext.Provider>
  );
};

export { SeatsProvider, SeatsContext };
