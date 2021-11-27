import { StyledForm, StyledHeader, ButtonContainer } from './../Form/Form.style';
import FormInput from '../../molecules/FormInput/FormInput';
import Button from '../../atoms/Button/Button';
import DateInput from '../../atoms/DateInput/DateInput';
import { useForm } from 'react-hook-form';

const AddDividentForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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

export default AddDividentForm;
