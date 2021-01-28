import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputBase = styled.input`
    padding: .75rem .87rem;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    margin-bottom: 2rem;
  
`;

export default function Input({ onChange, placeholder, name }) {
  return (
    <>
      <InputBase onChange={onChange} placeholder={placeholder} name={name} />
    </>
  );
}

Input.defaultProps = {
  value: '',
};

Input.prototype = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
