import React, { useState } from 'react';
import { StyledForm, StyledHeader, InputContainer, StyledSelect, ButtonContainer } from './../Form/Form.style';
import { useForm } from 'react-hook-form';
import Button from '../../atoms/Button/Button';
import FormInput from '../../molecules/FormInput/FormInput';
import FormError from '../../atoms/FormError/FormError';
import DateInput from '../../atoms/DateInput/DateInput';
import { useDatabase } from '../../../hooks/useDatabase';
import PropTypes from 'prop-types';
import { isMarginSufficient } from '../../../assets/helpers/isMarginSufficient';

const BuyStocksForm = ({ handleCloseModal, ticker, companyName, stockIndex }) => {
  const { register, handleSubmit } = useForm();
  const [tickerError, setTickerError] = useState(null);
  const [marginError, setMarginError] = useState(null);
  const { freeMargin, handleAddStocksToWallet } = useDatabase();

  const onSubmit = (data) => {
    setTickerError(null);
    setMarginError(null);
    if (data.ticker.length !== 3) {
      setTickerError('Ticker length must be 3 ');
      return;
    }

    if (isMarginSufficient(data, freeMargin)) {
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
        defaultValue={companyName ? companyName : ''}
        {...register('companyName')}
      />
      <FormInput
        type="text"
        id="ticker"
        placeholder="Ticker"
        ref={tickerRef}
        {...register('ticker')}
        required
        defaultValue={ticker ? ticker : ''}
      />
      {tickerError && <FormError text={tickerError} />}
      <InputContainer>
        <p>Select index:</p>
        <StyledSelect {...register('index')} defaultValue={stockIndex}>
          <option value="none">none</option>
          <option value="WIG20">WIG20</option>
          <option value="mWIG40">mWIG40</option>
          <option value="sWIG80">sWIG80</option>
        </StyledSelect>
      </InputContainer>
      <DateInput title="Open date" {...register('date')} />
      <FormInput type="number" id="volume" placeholder="Volume" ref={volumeRef} {...register('volume')} required />
      <FormInput
        type="number"
        id="openPrice"
        placeholder="Open price"
        step="0.001"
        ref={openPriceRef}
        {...register('openPrice')}
        required
      />
      <FormInput
        type="number"
        id="commission"
        placeholder="Commission"
        step="0.01"
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
  ticker: PropTypes.string,
  companyName: PropTypes.string,
  stockIndex: PropTypes.string,
};

export default BuyStocksForm;
