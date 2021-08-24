import React, { useState } from 'react';
import Button from '../../atoms/Button/Button';
import { StyledForm, StyledHeader, ButtonContainer } from './../Form/Form.style';
import FormInput from '../../molecules/FormInput/FormInput';
import DateInput from '../../atoms/DateInput/DateInput';
import FormError from './../../atoms/FormError/FormError';
import { useForm } from 'react-hook-form';
import { useDatabase } from '../../../hooks/useDatabase';
import PropTypes from 'prop-types';

const AddToHistoryForm = ({ closeModal }) => {
  const { register, handleSubmit } = useForm();
  const [tickerError, setTickerError] = useState(null);
  const [dateError, setDateError] = useState(null);
  const { handleAddPositionToHistory } = useDatabase();

  const submitForm = ({
    historyCompanyName,
    historyTicker,
    historyVolume,
    historyOpenDate,
    historyOpenPrice,
    historyCloseDate,
    historyClosePrice,
    historyTotalCommission,
  }) => {
    setDateError(null);
    setTickerError(null);
    if (historyTicker.length !== 3) {
      setTickerError('Ticker length must be 3 ');
      return;
    }
    if (historyOpenDate > historyCloseDate) {
      setDateError('Close date must be later than open date');
      return;
    }
    const positionToHistory = {
      id: Date.now(),
      companyName: historyCompanyName,
      ticker: historyTicker,
      volume: Number(historyVolume),
      openDate: historyOpenDate,
      openPrice: Number(historyOpenPrice),
      closeDate: historyCloseDate,
      closePrice: Number(historyClosePrice),
      totalCommission: Number(historyTotalCommission),
    };
    handleAddPositionToHistory(positionToHistory);
    closeModal();
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitForm)}>
      <StyledHeader>Add to history</StyledHeader>
      <FormInput type="text" placeholder="Company name" {...register('historyCompanyName')} required />
      <FormInput type="text" placeholder="Ticker" {...register('historyTicker')} required />
      {tickerError && <FormError text={tickerError} />}
      <FormInput type="number" placeholder="Volume" {...register('historyVolume')} required />
      <DateInput title="Open date" {...register('historyOpenDate')} />
      <FormInput type="number" placeholder="Open price" step="0.001" {...register('historyOpenPrice')} required />
      <DateInput title="Close date" {...register('historyCloseDate')} />
      {dateError && <FormError text={dateError} />}
      <FormInput type="number" placeholder="Close price" step="0.001" {...register('historyClosePrice')} required />
      <FormInput type="number" placeholder="Total commission" step="0.01" {...register('historyTotalCommission')} required />
      <ButtonContainer>
        <Button type="submit" title="Add to history" />
      </ButtonContainer>
    </StyledForm>
  );
};

AddToHistoryForm.propTypes = {
  closeModal: PropTypes.func,
};

export default AddToHistoryForm;
