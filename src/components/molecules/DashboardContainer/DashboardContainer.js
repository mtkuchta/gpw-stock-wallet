import { Wrapper, ContainerTitle } from './DashboardContainer.style';

const DashboardContainer = ({ title, children }) => {
  return (
    <Wrapper>
      <ContainerTitle>{title}</ContainerTitle>
      <div>{children}</div>
    </Wrapper>
  );
};

export default DashboardContainer;
