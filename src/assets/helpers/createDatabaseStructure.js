export const createDatabaseStructure = (accountBallance) => {
  return {
    deposit: { currency: 'PLN', amount: accountBallance ? accountBallance : 0 },
    wallet: {},
  };
};
