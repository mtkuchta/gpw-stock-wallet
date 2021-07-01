export const calculateSumOfPayments = (operationsTable) => {
  if (!operationsTable) return 0;
  return operationsTable.reduce((total, current) => {
    return total + current;
  }, 0);
};
