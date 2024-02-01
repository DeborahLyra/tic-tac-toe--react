import React from 'react'
import styled from 'styled-components';

function GamePage() {
  return (
    <Div>
        <H1>Tic-Tac-Toe</H1>
        <Span>
        <p>Created by Deborah Lyra </p>
       <a href='https://github.com/DeborahLyra' target='_blank'> <i class="fab fa-github"></i></a>
        </Span>
    </Div>
  )
}

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem;
  gap: 15px;
`;

export const H1 = styled.h1`
 font-size: 2.2rem
`;

export const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 1.5rem;
`;



export default GamePage
