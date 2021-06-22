import { StyledForm, StyledHeader, InputContainer, StyledSelect, StyledDate, ButtonContainer } from './BuyStocksForm.style';
import { useForm } from 'react-hook-form';
import Button from '../../atoms/Button/Button';
import FormInput from '../FormInput/FormInput';
import React from 'react';

const BuyStocksForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const companyNameRef = React.createRef();
  const tickerRef = React.createRef();
  const openPriceRef = React.createRef();
  const volumeRef = React.createRef();
  const commissionRef = React.createRef();

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledHeader>Add stocks</StyledHeader>
      <FormInput type="text" id="companyName" placeholder="Company name" ref={companyNameRef} {...register('companyName')} />
      <FormInput type="text" id="ticker" placeholder="Ticker" ref={tickerRef} {...register('ticker')} />
      <InputContainer>
        <p>Select index:</p>
        <StyledSelect>
          <option value="none">none</option>
          <option value="WIG20">WIG20</option>
          <option value="mWIG40">mWIG40</option>
          <option value="sWIG80">sWIG80</option>
        </StyledSelect>
      </InputContainer>
      <InputContainer>
        <p>Open date: </p>
        <StyledDate type="date" id="date" {...register('date')} />
      </InputContainer>
      <FormInput type="number" id="openPrice" placeholder="Open price" ref={openPriceRef} {...register('openPrice')} />
      <FormInput type="number" id="volume" placeholder="Volume" ref={volumeRef} {...register('volume')} />
      <FormInput type="number" id="commission" placeholder="Commission" ref={commissionRef} {...register('commission')} />
      <ButtonContainer>
        <Button title="Add stocks" type="submit" />
      </ButtonContainer>
    </StyledForm>
  );
};

export default BuyStocksForm;
