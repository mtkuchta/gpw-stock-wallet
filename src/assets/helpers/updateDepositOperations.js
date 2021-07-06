export const updateDepositOperations = (deposit, operation, value) => {
  if (operation === 'Withdrawal' || operation === 'Deposit') {
    const updatedOperations = deposit.operations ? [...deposit.operations] : [];
    updatedOperations.push(operation === 'Deposit' ? value : -value);
    return updatedOperations;
  }
  return deposit.operations;
};
