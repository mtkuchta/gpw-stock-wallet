import { Wrapper, ContainerTitle } from './DashboardContainer.style';
import PropTypes from 'prop-types';

const DashboardContainer = ({ title, children }) => {
  return (
    <Wrapper>
      <ContainerTitle>{title}</ContainerTitle>
      <div>{children}</div>
    </Wrapper>
  );
};

DashboardContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DashboardContainer;
