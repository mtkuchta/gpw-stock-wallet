import { useState, useEffect } from 'react';
import { Wrapper } from './History.style';
import ArchiveTable from '../../components/molecules/ArchiveTable/ArchiveTable';
import FilteringMenu from '../../components/molecules/FilteringMenu/FilteringMenu';
import { reward } from '../../assets/menus';
import YearSelector from '../../components/molecules/YearSelector/YearSelector';
import { useHistory } from 'react-router';
import { useDatabase } from '../../hooks/useDatabase';
import Modal from '../../components/organisms/Modal/Modal';
import useModal from '../../hooks/useModal';
import ClosedPositionDetails from '../../components/organisms/ClosedPositionDetails/ClosedPositionDetails';

const History = () => {
  const history = useHistory();
  const { archive, currentYear } = useDatabase();
  const [year, setYear] = useState(currentYear);
  const [idModal, setIdModal] = useState(null);
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

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

  const openModal = (e) => {
    setIdModal(Number(e.target.parentNode.id));
    handleOpenModal();
    findMatchingPosition(Number(e.target.parentNode.id));
  };

  const findMatchingPosition = (id) => {
    const matchingItem = archive.findIndex((item) => item.id === id);
    return archive[matchingItem];
  };

  return (
    <Wrapper>
      <YearSelector year={year} handleChangeYear={handleChangeYear} currentYear={currentYear} />
      <FilteringMenu route={`history/${year}`} items={reward} />
      <ArchiveTable openModal={openModal} archive={archive} />
      <Modal isOpen={isOpen} handleClose={handleCloseModal}>
        <ClosedPositionDetails position={findMatchingPosition(idModal)} />
      </Modal>
    </Wrapper>
  );
};

export default History;
