import { Wrapper } from './UserInfo.style';
import { useAuth } from '../../../hooks/useAuth';

const UserInfo = () => {
  const { user } = useAuth();
  return (
    <Wrapper>
      <p>Hello,</p>
      <h2>{user.displayName}</h2>
    </Wrapper>
  );
};

export default UserInfo;
