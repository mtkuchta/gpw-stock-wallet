import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useDatabase } from '../../hooks/useDatabase';
import queryString from 'query-string';
import useModal from '../../hooks/useModal';
import { findParent } from '../../assets/helpers/findParent';
import { reward } from '../../assets/menus';
import { Wrapper, ButtonsContainer } from './History.style';
import ArchiveTable from '../../components/molecules/ArchiveTable/ArchiveTable';
import FilteringMenu from '../../components/molecules/FilteringMenu/FilteringMenu';
import YearSelector from '../../components/molecules/YearSelector/YearSelector';
import Modal from '../../components/organisms/Modal/Modal';
import Button from '../../components/atoms/Button/Button';
import AddToHistoryForm from '../../components/organisms/AddToHistoryForm/AddToHistoryForm';

const History = () => {
  const history = useHistory();
  const { archive, currentYear } = useDatabase();
  const [year, setYear] = useState(currentYear);
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const { search } = useLocation();
  const { filter } = queryString.parse(search);

  useEffect(() => {
    if (year) history.push(`/history?year=${year}&filter=${filter || 'all'}`);
  }, [year, filter]);

  const handleChangeYear = (e) => {
    if (e.target.id === 'next') {
      setYear(year + 1);
    } else {
      setYear(year - 1);
    }
  };

  const openModal = (e) => {
    const parentElement = findParent(e.target);
    handleOpenModal();
    findMatchingPosition(Number(parentElement.id));
  };

  const findMatchingPosition = (id) => {
    const matchingItem = archive.findIndex((item) => item.id === id);
    return archive[matchingItem];
  };

  const handleClick = (e) => {
    handleOpenModal();
  };

  return (
    <Wrapper>
      <YearSelector year={year} handleChangeYear={handleChangeYear} currentYear={currentYear} />
      <FilteringMenu query="filter" items={reward} />
      <ArchiveTable openModal={openModal} archive={archive} />
      <ButtonsContainer>
        <Button title="add position to history" onClick={handleClick} small id="add" />
      </ButtonsContainer>
      <Modal isOpen={isOpen} handleClose={handleCloseModal}>
        <AddToHistoryForm closeModal={handleCloseModal} />
      </Modal>
    </Wrapper>
  );
};

export default History;
