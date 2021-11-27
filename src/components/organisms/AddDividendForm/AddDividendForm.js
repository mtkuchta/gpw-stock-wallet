import { StyledForm, StyledHeader, ButtonContainer } from './../Form/Form.style';
import FormInput from '../../molecules/FormInput/FormInput';
import Button from '../../atoms/Button/Button';
import DateInput from '../../atoms/DateInput/DateInput';
import { useForm } from 'react-hook-form';
import { useDatabase } from '../../../hooks/useDatabase';
import PropTypes from 'prop-types';

const AddDividentForm = ({ handleCloseModal }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { handleAddDividend } = useDatabase();

  const onSubmit = ({ dividendCompany, dividendDate, dividendAmount, dividendTax }) => {
    const timeStamp = Date.now();
    const dividend = {
      companyName: dividendCompany,
      date: dividendDate,
      netAmount: Number(dividendAmount),
      tax: Number(dividendTax),
    };
    handleAddDividend({ id: timeStamp, dividend });
    handleCloseModal();
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledHeader>Add Dividend</StyledHeader>
      <FormInput type="text" placeholder="Company name" {...register('dividendCompany')} required />
      <DateInput title="Date" {...register('dividendDate')} required />
      <FormInput type="number" placeholder="Net amount" {...register('dividendAmount', { min: 0.01 })} required />
      <FormInput type="number" placeholder="Tax" {...register('dividendTax', { min: 0.01 })} required />
      <ButtonContainer>
        <Button type="submit" title="Add" />
      </ButtonContainer>
    </StyledForm>
  );
};

AddDividentForm.propTypes = {
  handleCloseModal: PropTypes.func,
};

export default AddDividentForm;
