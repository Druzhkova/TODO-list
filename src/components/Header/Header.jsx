import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';

export function Header() {
  return(
    <header>
      <StyledButton type="transperent" color='skyblue'>All</StyledButton>
      <StyledButton type="transperent" color='skyblue'>Active</StyledButton>
      <StyledButton type="transperent" color='skyblue'>Done</StyledButton>
    </header>
  )
}

const StyledButton = styled(Button)`
  margin: 20px;
`