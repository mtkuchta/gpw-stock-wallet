import { Wrapper, StyledHeader } from './StockDetails.style';
import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StockSummary from '../../components/molecules/StockSummary/StockSummary';
import { UserContext } from '../../providers/UserProvider';
import PositionsTable from '../../components/molecules/PositionsTable/PositionsTable';

const StockDetails = () => {
  const params = useParams();
  const [activeStock, setActiveStock] = useState(null);
  const { wallet } = useContext(UserContext);

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
