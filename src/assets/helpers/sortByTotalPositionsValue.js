import { getTotalPositionValue } from './getTotalPositionValue';

export const sortByTotalPositionsValue = (a, b) => {
  const aPositionValue = getTotalPositionValue(a);
  const bPositionValue = getTotalPositionValue(b);

  return bPositionValue - aPositionValue;
};
