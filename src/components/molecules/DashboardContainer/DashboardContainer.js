import { Wrapper, ContainerTitle, ContentContainer } from './DashboardContainer.style';
import PropTypes from 'prop-types';

const DashboardContainer = ({ title, children }) => {
  return (
    <Wrapper>
      <ContainerTitle>{title}</ContainerTitle>
      <ContentContainer>{children}</ContentContainer>
    </Wrapper>
  );
};

DashboardContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DashboardContainer;
