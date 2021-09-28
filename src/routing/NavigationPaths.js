export const NavigationPaths = {
  HOMEPAGE: {
    path: '/',
  },
  DASHBOARD: {
    path: '/dashboard',
  },
  WALLET: {
    path: '/wallet',
    all: '/wallet/all',
    index: '/wallet/:index',
    // stock: '/wallet/stock/:ticker',
    stock: '/wallet/stock/',
  },
  HISTORY: {
    path: '/history',
    details: '/history/details',
    filtered: '/history/:year/:reward',
  },
};
