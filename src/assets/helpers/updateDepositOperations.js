export const updateDepositOperations = (deposit, operation, value) => {
  if (operation === 'Withdrawal' || operation === 'Deposit') {
    const updatedOperations = deposit.operations ? [...deposit.operations] : [];
    updatedOperations.push(operation === 'Deposit' ? value : -value);
    return updatedOperations;
    // database.ref(`${user.uid}/deposit/operations`).set(updatedOperations);
  }
  return deposit.operations;
};
