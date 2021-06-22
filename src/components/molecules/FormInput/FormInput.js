import React from 'react';
import { StyledLabel, StyledInput } from './FormInput.style';
import PropTypes from 'prop-types';

const FormInput = React.forwardRef(({ type, id, placeholder, ...rest }, ref) => {
  return (
    <StyledLabel htmlFor={id}>
      <StyledInput ref={ref} type={type} id={id} placeholder={placeholder} {...rest} />
      <p>{placeholder}</p>
    </StyledLabel>
  );
});

FormInput.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
};

export default FormInput;
