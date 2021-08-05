import React, { useState } from 'react';
import { StyledForm, StyledHeader, ButtonContainer } from './SellStocksForm.style';
import FormInput from '../../molecules/FormInput/FormInput';
import Button from '../../atoms/Button/Button';
import { useForm } from 'react-hook-form';
import FormError from '../../atoms/FormError/FormError';
import DateInput from '../../atoms/DateInput/DateInput';
import { useDatabase } from '../../../hooks/useDatabase';

const SellStocksForm = ({ idToSell, stock: { ticker, positions }, handleCloseModal, setIdToSell }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [closeDateError, setCloseDateError] = useState(false);

  const validateCloseDate = (openDate, closeDate) => {
    console.log(openDate, closeDate);
    console.log(closeDate < openDate);
    if (closeDate < openDate) {
      setCloseDateError('Close date cannot be earlier than open date');
      return true;
    }
    return false;
  };

  const { handleSellStocks, handleAddOperationToHistory } = useDatabase();

  const positionToSell = positions.findIndex((position) => position.id === idToSell);
  const volumeRef = React.createRef();
  const sellPriceRef = React.createRef();
  const commissionRef = React.createRef();

  const onSubmit = (data) => {
    console.log(positionToSell);
    setCloseDateError(false);
    if (validateCloseDate(positions[positionToSell].openDate, data.date)) return;
    const operationValue = Number(data.volume) * Number(data.sellPrice) - Number(data.commission);
    handleSellStocks(ticker, Number(data.volume), positionToSell, operationValue);
    handleAddOperationToHistory(
      ticker,
      positionToSell,
      Number(data.volume),
      Number(data.sellPrice),
      data.date,
      Number(data.commission)
    );
    setIdToSell(null);
    handleCloseModal();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledHeader>Sell stocks</StyledHeader>
      <FormInput
        type="number"
        id="volume"
        placeholder="Volume"
        ref={volumeRef}
        defaultValue={positions[positionToSell] ? positions[positionToSell].volume : 0}
        {...register('volume', { min: 1, max: `${positions[positionToSell] ? positions[positionToSell].volume : 'none'}` })}
        required
      />
      {errors.volume ? <FormError text="Volume cannot be greater than position size!" /> : null}
      <DateInput title="Sell date" {...register('date')} />
      {closeDateError && <FormError text={closeDateError} />}
      <FormInput
        type="number"
        id="sellPrice"
        placeholder="Sell price"
        step="0.01"
        ref={sellPriceRef}
        {...register('sellPrice', { min: 0.01 })}
        required
      />
      {errors.sellPrice ? <FormError text="Sell price must be greater than 0!" /> : null}
      <FormInput
        type="number"
        id="commission"
        placeholder="Commission"
        ref={commissionRef}
        {...register('commission')}
        required
      />
      <ButtonContainer>
        <Button type="Submit" title="Sell" />
      </ButtonContainer>
    </StyledForm>
  );
};

export default SellStocksForm;
