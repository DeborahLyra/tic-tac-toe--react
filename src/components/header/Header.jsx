import React from 'react'
import styled from 'styled-components';
import Title from '../title/Title';
import Subtitle from '../subtitle/Subtitle';


function Header() {
  return (
    <Div>
    <Title>Tic-Tac-Toe</Title>
    <Subtitle>
        <p>Created by Deborah Lyra </p>
        <a href='https://github.com/DeborahLyra' target='_blank'> <i class="fab fa-github"></i></a>
    </Subtitle>
</Div>
  )
}

export const Div = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;


export default Header
