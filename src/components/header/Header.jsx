import React from 'react'
import styled from 'styled-components';
import Title from '../title/Title';
import Subtitle from '../subtitle/Subtitle';


function Header() {
  return (
    <Div>
    <Title>Tic-Tac-Toe</Title>
    <Subtitle>
        <p>Created by Deborah Lyra</p>
        <a href='https://github.com/DeborahLyra' target='_blank'> <i className="fab fa-github"></i></a>
    </Subtitle>
</Div>
  )
}

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 40px 0;
`;

export default Header
