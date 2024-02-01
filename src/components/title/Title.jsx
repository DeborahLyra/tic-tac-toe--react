import React from 'react'
import styled from 'styled-components';

function Title({ children }) {
  return (
    <H1>{children}</H1>
  )
}

export const H1 = styled.h1`
 font-size: 2.2rem
`;

export default Title
