import styled from 'styled-components';
import ArchiveTable from '../../components/molecules/ArchiveTable/ArchiveTable';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const History = () => {
  return (
    <Wrapper>
      <ArchiveTable />
    </Wrapper>
  );
};

export default History;
