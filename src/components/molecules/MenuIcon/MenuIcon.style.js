import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  div {
    width: 42px;
    height: 4px;
    background-color: ${({ theme: { colors } }) => colors.default.backgroundColorPrimary};
    margin: 4px 0 4px 0;
    border-radius: 5px;
    transition: 0.6s;
    transition-timing-function: ease-in-out;

    &.opened:nth-child(1) {
      transform: translateY(12px) rotate(135deg);
    }

    &.opened:nth-child(2) {
      transform: scale(0);
    }

    &.opened:nth-child(3) {
      transform: translateY(-12px) rotate(-135deg);
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;
