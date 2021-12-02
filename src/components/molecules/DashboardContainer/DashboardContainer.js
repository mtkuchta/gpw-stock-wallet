import React from 'react';
import { Wrapper, ContainerTitle, ContentContainer } from './DashboardContainer.style';
import PropTypes from 'prop-types';

const DashboardContainer = React.forwardRef(({ title, children }, ref) => {
  return (
    <Wrapper ref={ref}>
      <ContainerTitle>{title}</ContainerTitle>
      <ContentContainer>{children}</ContentContainer>
    </Wrapper>
  );
});

DashboardContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DashboardContainer;
