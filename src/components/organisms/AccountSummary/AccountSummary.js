import { useState } from 'react';
import DashboardContainer from '../../molecules/DashboardContainer/DashboardContainer';
import { StyledText, ButtonsContainer } from './AccountSummary.style';
import { calculateFreeMargin } from '../../../assets/helpers/calculateFreeMargin';
import Button from '../../atoms/Button/Button';
import useModal from '../../../hooks/useModal';
import Modal from '../Modal/Modal';
import AccountForm from '../../molecules/AccountForm/AccountForm';
import { useDatabase } from '../../../hooks/useDatabase';

const AccountSummary = () => {
  const { deposit, wallet } = useDatabase();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const [operation, setOperation] = useState();

  const handleClick = (e) => {
    setOperation(e.target.name);
    handleOpenModal();
  };

  return (
    <DashboardContainer title="account">
      <StyledText>
        Account value: <span>{deposit.amount} </span>PLN
      </StyledText>
      <StyledText>
        Free margin: <span> {calculateFreeMargin(deposit.amount, wallet)}</span> PLN
      </StyledText>
      <ButtonsContainer>
        <Button title="Deposit" onClick={handleClick} />
        <Button title="Withdrawal" onClick={handleClick} />
      </ButtonsContainer>
      <Modal isOpen={isOpen} handleClose={handleCloseModal}>
        <AccountForm
          operation={operation}
          freeMargin={calculateFreeMargin(deposit.amount, wallet)}
          handleCloseModal={handleCloseModal}
        />
      </Modal>
    </DashboardContainer>
  );
};

export default AccountSummary;
