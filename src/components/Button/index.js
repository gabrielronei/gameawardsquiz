import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DefaultButton = styled.button`
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 14px;
    padding: .75rem .87rem;
    color: ${({ theme }) => theme.colors.defaultText};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary};
    &:hover {
      opacity: 0.8;
    };
`;

export default function Button({ type, disabled, children }) {
  return (
    <>
      <DefaultButton type={type} disabled={disabled}>{children}</DefaultButton>
    </>
  );
}

Button.defaultProps = {
  disabled: false,
};

Button.prototype = {
  type: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
