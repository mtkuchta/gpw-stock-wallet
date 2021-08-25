import { useState } from 'react';
import DashboardContainer from '../../molecules/DashboardContainer/DashboardContainer';
import { StyledText, ButtonsContainer } from './../../molecules/DashboardContainer/DashboardContainer.style';
import Button from '../../atoms/Button/Button';
import useModal from '../../../hooks/useModal';
import Modal from '../Modal/Modal';
import AccountForm from '../../molecules/AccountForm/AccountForm';
import { useDatabase } from '../../../hooks/useDatabase';
import { calculateSumOfPayments } from '../../../assets/helpers/calculateSumOfPayments';

const AccountSummary = () => {
  const { deposit, freeMargin } = useDatabase();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const [operation, setOperation] = useState();

  const handleClick = (e) => {
    setOperation(e.target.name);
    handleOpenModal();
  };

  return (
    <DashboardContainer title="account">
      <StyledText>
        Sum of payments: <span>{calculateSumOfPayments(deposit.operations)} </span>PLN
      </StyledText>
      <StyledText>
        Free margin: <span> {freeMargin}</span> PLN
      </StyledText>
      <ButtonsContainer>
        <Button title="Deposit" onClick={handleClick} />
        <Button title="Withdrawal" onClick={handleClick} />
      </ButtonsContainer>
      <Modal isOpen={isOpen} handleClose={handleCloseModal}>
        <AccountForm operation={operation} freeMargin={deposit.amount} handleCloseModal={handleCloseModal} />
      </Modal>
    </DashboardContainer>
  );
};

export default AccountSummary;
