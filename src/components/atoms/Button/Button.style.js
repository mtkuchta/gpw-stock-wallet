import styled from 'styled-components';

export const StyledButton = styled.button`
  position: relative;
  min-width: 60px;
  height: ${({ small }) => (small ? '20px' : '26px')};
  margin: 0 5px;
  font-size: ${({ theme: { fontSize }, small }) => (small ? fontSize.xs : fontSize.s)};
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.default.button};
  border-radius: 6px;
  background-color: transparent;
  border: 2px solid ${({ theme: { colors } }) => colors.default.button};
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  letter-spacing: 1px;
  padding: 0 8px;
  overflow: hidden;
  z-index: 0;

  &:disabled {
    box-shadow: none;
  }

  @media (min-width: 1200px) {
    /* position: relative; */
    height: ${({ small }) => (small ? '26px' : '34px')};
    margin: 0 20px;
    font-size: ${({ theme: { fontSize }, small }) => (small ? fontSize.s : fontSize.m)};
    padding: 0 12px;
    transition: color 0.4s cubic-bezier(0.61, 0.07, 0.23, 0.89);
    cursor: pointer;

    &::after {
      position: absolute;
      content: '';
      width: 300px;
      height: 300px;
      background-color: ${({ theme: { colors } }) => colors.default.button};
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      border-radius: 300px;
      transform-origin: 50%;
      transition: transform 0.4s cubic-bezier(0.61, 0.07, 0.23, 0.89);
      z-index: -1;
    }

    &:hover::after {
      transform: translate(-50%, -50%) scale(1);
    }

    &:hover {
      color: ${({ theme: { colors } }) => colors.default.buttonText};
    }

    &:disabled:hover {
      background-color: ${({ theme: { colors } }) => colors.default.button};
    }
  }
`;
