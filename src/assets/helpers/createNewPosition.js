export const createNewPosition = (data, stock) => {
  return {
    openDate: data.date,
    openPrice: Number(data.openPrice),
    volume: Number(data.volume),
    commission: Number(data.commission),
    id: Date.now(),
  };
};
