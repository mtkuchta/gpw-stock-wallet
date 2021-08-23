import { useState, useEffect } from 'react';
import { Wrapper, ButtonsContainer } from './History.style';
import ArchiveTable from '../../components/molecules/ArchiveTable/ArchiveTable';
import FilteringMenu from '../../components/molecules/FilteringMenu/FilteringMenu';
import { reward } from '../../assets/menus';
import YearSelector from '../../components/molecules/YearSelector/YearSelector';
import { useHistory } from 'react-router';
import { useDatabase } from '../../hooks/useDatabase';
import Modal from '../../components/organisms/Modal/Modal';
import useModal from '../../hooks/useModal';
import ClosedPositionDetails from '../../components/organisms/ClosedPositionDetails/ClosedPositionDetails';
import { findParent } from '../../assets/helpers/findParent';
import Button from '../../components/atoms/Button/Button';
import AddToHistoryForm from '../../components/organisms/AddToHistoryForm/AddToHistoryForm';

const History = () => {
  const history = useHistory();
  const { archive, currentYear } = useDatabase();
  const [year, setYear] = useState(currentYear);
  const [idModal, setIdModal] = useState(null);
  const [isDetailsModal, setIsDetailsModal] = useState(true);
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
    setIsDetailsModal(true);
    const parentElement = findParent(e.target);
    setIdModal(Number(parentElement.id));
    handleOpenModal();
    findMatchingPosition(Number(parentElement.id));
  };

  const findMatchingPosition = (id) => {
    const matchingItem = archive.findIndex((item) => item.id === id);
    return archive[matchingItem];
  };

  const handleClick = (e) => {
    setIsDetailsModal(false);
    handleOpenModal();
  };

  return (
    <Wrapper>
      <YearSelector year={year} handleChangeYear={handleChangeYear} currentYear={currentYear} />
      <FilteringMenu route={`history/${year}`} items={reward} />
      <ArchiveTable openModal={openModal} archive={archive} />
      <ButtonsContainer>
        <Button title="add position to history" onClick={handleClick} small id="add" />
      </ButtonsContainer>
      <Modal isOpen={isOpen} handleClose={handleCloseModal}>
        {isDetailsModal ? (
          <ClosedPositionDetails position={findMatchingPosition(idModal)} />
        ) : (
          <AddToHistoryForm closeModal={handleCloseModal} />
        )}
      </Modal>
    </Wrapper>
  );
};

export default History;
