import { theme } from '../../../assets/styles/theme';

export const customStyles = {
  rows: {
    style: {
      backgroundColor: theme.colors.default.backgroundPrimary,
      fontSize: theme.fontSize.xs,
      color: theme.colors.default.textPrimary,
      letterSpacing: '1px',
      cursor: 'pointer',
      '&:nth-child(odd)': {
        backgroundColor: theme.colors.default.tableRow,
      },
      minHeight: '30px',
      '@media (min-width:1200px)': {
        fontSize: theme.fontSize.s,
        minHeight: '45px',
        transition: '.4s ease-in-out',
        '&:hover': {
          backgroundColor: theme.colors.default.backgroundSecondary,
          color: theme.colors.default.textSecondary,
          fontWeight: 'bold',
        },
      },
    },
  },
  headCells: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: theme.colors.default.backgroundPrimary,
      color: theme.colors.default.textHeaders,
      fontSize: theme.fontSize.xs,
      textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
      fontWeight: 'bold',
      paddingLeft: '5px',
      paddingRight: '5px',

      '@media (min-width:1200px)': {
        fontSize: theme.fontSize.m,
      },
    },
  },
  cells: {
    style: {
      textAlign: 'center',
      paddingLeft: '5px',
      paddingRight: '5px',
      display: 'flex',
      justifyContent: 'center',
    },
  },
  pagination: {
    style: {
      color: theme.colors.default.textPrimary,
    },
    pageButtonsStyle: {
      color: theme.colors.default.textPrimary,
      fill: theme.colors.default.textPrimary,
    },
  },
};
