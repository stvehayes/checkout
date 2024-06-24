import React, { createContext, useState } from 'react';
import { product } from '../data/Data';

// Create the context
const SeatsContext = createContext();

// Create a provider component
const SeatsProvider = ({ children }) => {
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
