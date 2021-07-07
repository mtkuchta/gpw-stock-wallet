import styled from 'styled-components';
import ArchiveTable from '../../components/molecules/ArchiveTable/ArchiveTable';
import FilteringMenu from '../../components/molecules/FilteringMenu/FilteringMenu';
import { reward } from '../../assets/menus';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const History = () => {
  return (
    <Wrapper>
      <FilteringMenu route="history" items={reward} />
      <ArchiveTable />
    </Wrapper>
  );
};

export default History;
