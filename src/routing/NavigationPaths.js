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
    stock: '/wallet/stock/:ticker',
  },
  HISTORY: {
    path: '/history',
    details: '/history/details/:id',
    filtered: '/history/:year/:reward',
  },
};
