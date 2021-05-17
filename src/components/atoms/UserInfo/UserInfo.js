import { useContext } from 'react';
import { Wrapper } from './UserInfo.style';

import { UserContext } from '../../../providers/UserProvider';

const UserInfo = () => {
  const { user } = useContext(UserContext);
  return (
    <Wrapper>
      <p>Hello,</p>
      <h2>{user.name}</h2>
    </Wrapper>
  );
};

export default UserInfo;
