import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

function CustomButton(props) {
  const StyledButton = styled(Button)`
    background-color: ${props.background};
    border: 3px solid ${props.border};
    border-radius: 0;
    color: ${props.color};
    font-family: 'Karla';
    font-size: 16px;
    font-weight: 700;
    width: ${props.width};
    &:hover {
      background-color: ${props.backgroundHover};
      color: ${props.colorHover};
      text-decoration: ${props.decorationHover};
      cursor: pointer;
    }
  `;

  return (
    <StyledButton>
      {props.content}
    </StyledButton>
  );
}

export default CustomButton;
