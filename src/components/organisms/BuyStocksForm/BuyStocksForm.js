import React, { useState } from 'react';
import { StyledForm, StyledHeader, InputContainer, StyledSelect, StyledDate, ButtonContainer } from './BuyStocksForm.style';
import { useForm } from 'react-hook-form';
import Button from '../../atoms/Button/Button';
import FormInput from '../../molecules/FormInput/FormInput';
import FormError from '../../atoms/FormError/FormError';
import { useDatabase } from '../../../hooks/useDatabase';
import PropTypes from 'prop-types';
import { isMarginSufficient } from '../../../assets/helpers/isMarginSufficient';
import { calculateFreeMargin } from '../../../assets/helpers/calculateFreeMargin';

const BuyStocksForm = ({ handleCloseModal }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [tickerError, setTickerError] = useState(null);
  const [marginError, setMarginError] = useState(null);
  const { deposit, wallet, handleAddStocksToWallet, handleDepositOperations } = useDatabase();

  const onSubmit = (data) => {
    setTickerError(null);
    setMarginError(null);
    if (data.ticker.length !== 3) {
      setTickerError('Ticker length must be 3 ');
      return;
    }

    if (isMarginSufficient(data, calculateFreeMargin(deposit.amount, wallet))) {
      handleAddStocksToWallet(data);
      handleCloseModal();
    } else {
      setMarginError('Oops! Operation value is bigger than free margin');
    }
  };

  const companyNameRef = React.createRef();
  const tickerRef = React.createRef();
  const openPriceRef = React.createRef();
  const volumeRef = React.createRef();
  const commissionRef = React.createRef();

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledHeader>Add stocks</StyledHeader>
      <FormInput
        type="text"
        id="companyName"
        placeholder="Company name"
        ref={companyNameRef}
        required
        {...register('companyName')}
      />
      <FormInput type="text" id="ticker" placeholder="Ticker" ref={tickerRef} {...register('ticker')} required />
      {tickerError && <FormError text={tickerError} />}
      <InputContainer>
        <p>Select index:</p>
        <StyledSelect {...register('index')}>
          <option value="none">none</option>
          <option value="WIG20">WIG20</option>
          <option value="mWIG40">mWIG40</option>
          <option value="sWIG80">sWIG80</option>
        </StyledSelect>
      </InputContainer>
      <InputContainer>
        <p>Open date: </p>
        <StyledDate type="date" id="date" required {...register('date')} />
      </InputContainer>
      <FormInput
        type="number"
        id="openPrice"
        placeholder="Open price"
        step="0.01"
        ref={openPriceRef}
        {...register('openPrice')}
        required
      />
      <FormInput type="number" id="volume" placeholder="Volume" ref={volumeRef} {...register('volume')} required />
      <FormInput
        type="number"
        id="commission"
        placeholder="Commission"
        ref={commissionRef}
        {...register('commission')}
        required
      />
      {marginError && <FormError text={marginError} />}
      <ButtonContainer>
        <Button title="Add stocks" type="submit" />
      </ButtonContainer>
    </StyledForm>
  );
};

BuyStocksForm.propTypes = {
  handleCloseModal: PropTypes.func,
};

export default BuyStocksForm;
