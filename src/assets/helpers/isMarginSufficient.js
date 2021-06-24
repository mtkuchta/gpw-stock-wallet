export const isMarginSufficient = ({ openPrice, volume, commission }, freeMargin) => {
  const operationValue = Number(openPrice) * Number(volume) + Number(commission);
  return operationValue <= freeMargin;
};
