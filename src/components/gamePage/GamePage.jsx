import React from 'react'
import styled from 'styled-components';
import Header from '../header/Header';
import Game from '../game/Game';

function GamePage() {
    return (
        <DivContainer className='container'>
            <Header />
            <Game />
        </DivContainer>
    )
}

export const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-height: 100vh;
`

export default GamePage
