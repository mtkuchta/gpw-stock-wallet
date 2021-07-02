import React, { useEffect } from 'react';
import FormInput from '../../molecules/FormInput/FormInput';
import Button from '../../atoms/Button/Button';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import FormError from '../../atoms/FormError/FormError';
import DateInput from '../../atoms/DateInput/DateInput';
import { useDatabase } from '../../../hooks/useDatabase';

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0;
  align-items: center;
`;

export const StyledHeader = styled.h2`
  width: 100%;
  margin-bottom: 20px;
  padding-left: 10px;
  color: ${({ theme: { colors } }) => colors.default.textPrimary};
  font-size: ${({ theme: { fontSize } }) => fontSize.m};
  letter-spacing: 1px;
  font-weight: normal;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.l};
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

const SellStocksForm = ({ idToSell, stock: { ticker, positions }, handleCloseModal, setIdToSell }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { handleSellStocks, handleAddOperationToHistory } = useDatabase();

  const positionToSell = positions.findIndex((position) => position.id === idToSell);
  const volumeRef = React.createRef();
  const sellPriceRef = React.createRef();
  const commissionRef = React.createRef();

  const onSubmit = (data) => {
    const operationValue = Number(data.volume) * Number(data.sellPrice) - Number(data.commission);
    handleSellStocks(ticker, Number(data.volume), positionToSell, operationValue);
    // handleAddOperationToHistory(
    //   ticker,
    //   positionToSell,
    //   Number(data.volume),
    //   Number(data.sellPrice),
    //   data.date,
    //   Number(data.commission)
    // );
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
      <FormInput
        type="number"
        id="sellPrice"
        placeholder="Sell price"
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
