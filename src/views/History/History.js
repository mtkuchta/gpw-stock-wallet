import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
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
  const tl = useRef(null);
  const yearSelectorRef = useRef(null);
  const filteringMenuRef = useRef(null);
  const archiveTableRef = useRef(null);

  useEffect(() => {
    if (year) history.push(`/history?year=${year}&filter=${filter || 'all'}`);
  }, [year, filter]);

  useEffect(() => {
    tl.current = gsap.timeline();

    if (tl.current) {
      tl.current
        .to(archiveTableRef.current, { opacity: 1, duration: 1 })
        .to([filteringMenuRef.current, yearSelectorRef.current], { opacity: 1, duration: 1 }, '+=0.4');
    }
  }, []);

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
      <YearSelector year={year} handleChangeYear={handleChangeYear} currentYear={currentYear} ref={yearSelectorRef} />
      <FilteringMenu query="filter" items={reward} ref={filteringMenuRef} />
      <ArchiveTable openModal={openModal} archive={archive} ref={archiveTableRef} />
      <ButtonsContainer>
        <Button title="Add position to history" onClick={handleClick} id="add" />
      </ButtonsContainer>
      <Modal isOpen={isOpen} handleClose={handleCloseModal}>
        <AddToHistoryForm closeModal={handleCloseModal} />
      </Modal>
    </Wrapper>
  );
};

export default History;
