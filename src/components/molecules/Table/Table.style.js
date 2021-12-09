import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  opacity: 0;

  table {
    width: 100%;
    padding: 0 10px;
    border-spacing: 0;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: ${({ theme: { fontSize } }) => fontSize.xs};

    th,
    td {
      padding: 8px 5px;
      text-align: center;
    }

    thead {
      tr {
        color: ${({ theme: { colors } }) => colors.default.textHeaders};
      }
    }

    tbody {
      letter-spacing: 1px;
      tr {
        color: ${({ theme: { colors } }) => colors.default.textPrimary};

        td:first-child {
          text-transform: uppercase;
        }
      }
      tr:nth-child(odd) {
        background-color: ${({ theme: { colors } }) => colors.default.tableRow};
        color: ${({ theme: { colors } }) => colors.default.textPrimary};
      }
    }
  }

  @media (min-width: 1200px) {
    table {
      font-size: ${({ theme: { fontSize } }) => fontSize.m};

      th,
      td {
        padding: 12px 5px;
      }

      tbody {
        tr {
          cursor: pointer;
          transition: 0.6s;
          letter-spacing: 1px;

          &.active:hover {
            background-color: ${({ theme: { colors } }) => colors.default.backgroundSecondary};
            color: ${({ theme: { colors } }) => colors.default.textSecondary};
          }
        }
      }
    }
  }
`;

export const StyledReward = styled.span`
  color: ${({ color }) => color};
  letter-spacing: 1px;
`;
