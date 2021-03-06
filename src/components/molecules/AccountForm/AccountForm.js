import { Wrapper, StyledForm, StyledInput, StyledLabel } from './AccountForm.style';
import { useForm } from 'react-hook-form';
import Button from '../../atoms/Button/Button';
import FormError from '../../atoms/FormError/FormError';
import PropTypes from 'prop-types';
import { useDatabase } from '../../../hooks/useDatabase';

const AccountForm = ({ operation, freeMargin, handleCloseModal }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { handleDepositOperations } = useDatabase();
  const withdrawalLimit = operation === 'Withdrawal' ? freeMargin : 'infinity';

  const onSubmit = (data) => {
    handleDepositOperations(operation, Number(data.amount));
    handleCloseModal();
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <h2>{operation} amount:</h2>
        <div>
          <StyledInput
            id="amount"
            type="number"
            defaultValue={0}
            {...register('amount', { required: true, min: 1, max: withdrawalLimit })}
          />
          <StyledLabel htmlFor="amount">PLN</StyledLabel>
        </div>
        {errors.amount && (
          <FormError
            text={
              errors.amount.type === 'min'
                ? 'Amount must be grater than 0 PLN'
                : 'Withdrawal amount cannot be higher than free margin'
            }
          />
        )}
        <Button type="submit" title={operation} />
      </StyledForm>
    </Wrapper>
  );
};

AccountForm.propTypes = {
  operation: PropTypes.string,
  freeMargin: PropTypes.number,
  handleCloseModal: PropTypes.func,
};

export default AccountForm;
