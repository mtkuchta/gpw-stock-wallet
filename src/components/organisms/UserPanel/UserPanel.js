import { Wrapper } from './UserPanel.style';
import DateInfo from '../../molecules/DateInfo/DateInfo';
import UserInfo from '../../atoms/UserInfo/UserInfo';

const UserPanel = () => {
  return (
    <Wrapper>
      <DateInfo />
      <UserInfo />
    </Wrapper>
  );
};

export default UserPanel;
