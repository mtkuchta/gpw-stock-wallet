import { Wrapper, StyledHeader } from './StockDetails.style';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StockSummary from '../../components/molecules/StockSummary/StockSummary';
import PositionsTable from '../../components/molecules/PositionsTable/PositionsTable';
import { useDatabase } from '../../hooks/useDatabase';

const StockDetails = () => {
  const params = useParams();
  const [activeStock, setActiveStock] = useState(null);
  const { wallet } = useDatabase();

  useEffect(() => {
    const stock = Object.values(wallet).filter((stock) => {
      return stock.ticker === params.ticker;
    });
    setActiveStock(stock[0]);
  }, []);

  return (
    <Wrapper>
      {activeStock && (
        <>
          <StyledHeader>
            <h2>{activeStock.ticker}</h2>
            <h3>{activeStock.companyName} S.A.</h3>
          </StyledHeader>
          <StockSummary stock={activeStock} />
          <PositionsTable stock={activeStock} />
        </>
      )}
    </Wrapper>
  );
};

export default StockDetails;
