import React, { useState } from 'react';
import { StyledForm, StyledHeader, ButtonContainer } from '../Form/Form.style';
import FormInput from '../../molecules/FormInput/FormInput';
import Button from '../../atoms/Button/Button';
import { useForm } from 'react-hook-form';
import FormError from '../../atoms/FormError/FormError';
import DateInput from '../../atoms/DateInput/DateInput';
import { useDatabase } from '../../../hooks/useDatabase';
import { calculateTotalVolume } from '../../../assets/helpers/calculateTotalVolume';
import { validateCloseDate } from '../../../assets/helpers/validateCloseDate';
import PropTypes from 'prop-types';

const SellAllPositionsForm = ({ stock, handleCloseModal, setIdToSell }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [closeDateError, setCloseDateError] = useState(false);
  const { handleAddOperationToHistory, handleSellAllPositions } = useDatabase();
  const volumeRef = React.createRef();
  const sellPriceRef = React.createRef();
  const commissionRef = React.createRef();

  const validatePositionDates = (positions, data) => {
    let isDateValid = true;
    positions.forEach((position) => {
      if (!validateCloseDate(position.openDate, data.date, setCloseDateError)) isDateValid = false;
    });
    return isDateValid;
  };

  const onSubmit = (data) => {
    setCloseDateError(false);
    if (!validatePositionDates(stock.positions, data)) return;
    const ticker = stock.ticker;
    stock.positions.forEach((position, index) => {
      handleAddOperationToHistory(ticker, index, position.volume, Number(data.sellPrice), data.date, Number(data.commission));
    });
    handleSellAllPositions(ticker);
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
        defaultValue={calculateTotalVolume(stock)}
        {...register('volume')}
        required
        disabled
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

SellAllPositionsForm.propTypes = {
  stock: PropTypes.shape({
    ticker: PropTypes.string,
    positions: PropTypes.arrayOf(
      PropTypes.shape({
        commission: PropTypes.number,
        id: PropTypes.number,
        openDate: PropTypes.string,
        openPrice: PropTypes.number,
        volume: PropTypes.number,
      })
    ),
  }),
  handleCloseModal: PropTypes.func,
  setIdToSell: PropTypes.func,
};

export default SellAllPositionsForm;
