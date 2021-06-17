import { Wrapper, ButtonsContainer } from './UserPanel.style';
import DateInfo from '../../molecules/DateInfo/DateInfo';
import UserInfo from '../../atoms/UserInfo/UserInfo';
import Button from '../../atoms/Button/Button';
import { useAuth } from '../../../hooks/useAuth';

const UserPanel = () => {
  const { signOut } = useAuth();
  return (
    <Wrapper>
      <DateInfo />
      <UserInfo />
      <ButtonsContainer>
        <Button title="Sign Out" small onClick={signOut} />
      </ButtonsContainer>
    </Wrapper>
  );
};

export default UserPanel;
