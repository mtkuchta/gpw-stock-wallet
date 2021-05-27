export const calculateTotalVolume = (stock) => {
  return stock.positions.reduce((accumulator, currentValue) => {
    return (accumulator += Number(currentValue.volume));
  }, 0);
};
