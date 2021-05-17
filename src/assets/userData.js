export const userData = {
  user: { name: 'Mateusz' },
  deposit: { currency: 'PLN', amount: 18000 },
  wallet: {
    clc: {
      companyName: 'Columbus Energy',
      index: 'none',
      positions: [
        { id: 1, openDate: '25.08.2020', volume: 15, openPrice: 71.0, commission: 5 },
        { id: 2, openDate: '18.09.2020', volume: 7, openPrice: 74.2, commission: 5 },
        { id: 3, openDate: '29.10.2020', volume: 23, openPrice: 42.1, commission: 0 },
      ],
    },
    eur: {
      companyName: 'Eurocash',
      index: 'mWIG40',
      positions: [
        { id: 1, openDate: '04.02.2020', volume: 75, openPrice: 19.47, commission: 10 },
        { id: 2, openDate: '08.07.2020', volume: 70, openPrice: 16.92, commission: 5 },
        { id: 3, openDate: '22.09.2020', volume: 35, openPrice: 14.66, commission: 5 },
      ],
    },
    fmf: {
      companyName: 'Famur',
      index: 'mWIG40',
      positions: [
        { id: 1, openDate: '31.01.2020', volume: 470, openPrice: 3.195, commission: 10 },
        { id: 2, openDate: '12.06.2020', volume: 300, openPrice: 2.095, commission: 5 },
        { id: 3, openDate: '29.03.2021', volume: 300, openPrice: 2.425, commission: 5 },
      ],
    },
    pkp: {
      companyName: 'PKP Cargo',
      index: 'mWIG40',
      positions: [
        { id: 1, openDate: '12.02.2020', volume: 60, openPrice: 17.5, commission: 10 },
        { id: 2, openDate: '21.02.2020', volume: 66, openPrice: 15.24, commission: 10 },
        { id: 3, openDate: '12.05.2020', volume: 56, openPrice: 11.44, commission: 10 },
      ],
    },
  },
};
