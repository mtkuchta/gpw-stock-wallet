import DateInfo from '../../molecules/DateInfo/DateInfo';
import UserInfo from '../../atoms/UserInfo/UserInfo';

import styled from 'styled-components';

const Wrapper = styled.header`
  width: 95%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid ${({ theme: { colors } }) => colors.default.borderColor};
`;

const UserPanel = () => {
  return (
    <Wrapper>
      <DateInfo />
      <UserInfo />
    </Wrapper>
  );
};

export default UserPanel;
