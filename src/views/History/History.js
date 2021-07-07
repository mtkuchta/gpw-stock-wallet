import { useState, useEffect } from 'react';
import { Wrapper } from './History.style';
import ArchiveTable from '../../components/molecules/ArchiveTable/ArchiveTable';
import FilteringMenu from '../../components/molecules/FilteringMenu/FilteringMenu';
import { reward } from '../../assets/menus';
import YearSelector from '../../components/molecules/YearSelector/YearSelector';
import { useHistory } from 'react-router';
import { useDatabase } from '../../hooks/useDatabase';

const History = () => {
  const history = useHistory();
  const { currentYear } = useDatabase();
  const [year, setYear] = useState(currentYear);

  useEffect(() => {
    if (year) history.push(`/history/${year}/all`);
  }, [year]);

  const handleChangeYear = (e) => {
    if (e.target.id === 'next') {
      setYear(year + 1);
    } else {
      setYear(year - 1);
    }
  };

  return (
    <Wrapper>
      <YearSelector year={year} handleChangeYear={handleChangeYear} />
      <FilteringMenu route={`history/${year}`} items={reward} />
      <ArchiveTable />
    </Wrapper>
  );
};

export default History;
