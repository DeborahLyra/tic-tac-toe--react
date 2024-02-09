import { useState } from "react";
import GameOpition from "../gameOpition/GameOpition"
import styled from 'styled-components';
import Icon from "../icon/Icon";



function Game() {

  const [gameState, setGameState] = useState(Array(9).fill(0));
  const [currentPlayer, setCurrentPlayer] = useState(1)

  const handleClick = (index) => {
    if (gameState[index] === 0) {
      let newGameState = [...gameState];
      newGameState[index] = currentPlayer;
      setCurrentPlayer(currentPlayer === 1 ? -1 : 1);
      setGameState(newGameState)
    }
  }

  return (
    <DivContainer>
      <DivBoard>
        {
          gameState.map((value, index) => {
            return (<GameOpition
              status={value}
              key={`game-option-position-${index}`}
              onClick={() => handleClick(index)}
            />)
          })
        }
      </DivBoard>
      <DivInfo>
        <h3>Next one:</h3>
        {
          currentPlayer === 1 ? <Icon iconName='circle' /> : <Icon iconName='x' />
        }
      </DivInfo>
    </DivContainer>

  )
}

export const DivBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export const DivContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

export const DivInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
`;

export default Game
