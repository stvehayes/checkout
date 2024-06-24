export const ConvertToPrice = (price, decimal) => {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: decimal,
    maximumFractionDigits: decimal,
  });
};

export const CalculateSalesTax = (total) => {
  return total * 0.06;
};
