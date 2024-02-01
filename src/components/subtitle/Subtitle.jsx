import React from 'react'
import styled from 'styled-components';

function Subtitle({ children }) {
    return (
        <Span>
            {children}
        </Span>
    )
}

export const Span = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-size: 1.3rem;
`;

export default Subtitle
