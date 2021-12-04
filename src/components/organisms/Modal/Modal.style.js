import styled, { keyframes } from 'styled-components';
import ReactModal from 'react-modal';

const ModalAnimation = keyframes` 
from{
  opacity:0;
 transform:translate(-50%, -50%) scale(0);
}
to{
  opacity:1;
  transform: translate(-50%, -50%) scale(1);
}
}`;

export const ModalWrapper = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  min-height: 20%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme: { colors } }) => colors.default.backgroundPrimary};
  border-radius: 15px;
  z-index: 1000;
  animation: ${ModalAnimation} 0.5s;

  &:focus {
    outline: none;
  }

  @media (min-width: 1024px) {
    max-width: 400px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: none;
  font-size: 18px;
  line-height: 20px;
  background-color: ${({ theme: { colors } }) => colors.default.button};
  color: ${({ theme: { colors } }) => colors.default.buttonText};
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  font-weight: bold;

  @media (min-width: 1200px) {
    transition: 0.6s;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme: { colors } }) => colors.default.buttonHover};
    }
  }
`;
