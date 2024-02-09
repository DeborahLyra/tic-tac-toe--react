import { useState, useEffect } from "react";
import GameOpition from "../gameOpition/GameOpition"
import styled from 'styled-components';
import Icon from "../icon/Icon";

//possibilidades de vitórias
const winerTable = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6],
  [0,3,6],
  [1,4,7],
  [2,5,8],
]

function Game() {

  const [gameState, setGameState] = useState(Array(9).fill(0));
  const [currentPlayer, setCurrentPlayer] = useState(1) //1 = circulo | -1 = x 
  const [winner, setWinner] = useState(0) // 0 = sem campeão | 1 = circulo ganhou | -1 = x ganhou

  const handleClick = (index) => {
    if (gameState[index] === 0 && winner === 0) {
      let newGameState = [...gameState];
      newGameState[index] = currentPlayer;
      setGameState(newGameState)
    }
  }

  const verifyGame = () => {
    winerTable.forEach((line) => {
      const values = line.map((value) => gameState[value]); //o que está na tabela são as posicoes do array, então ele acaba pegando o item na posicao tal 
      const acc = values.reduce((acc, value)=> acc + value) // aqui soma, pq se der 3 ou -3 tem um vencedor
      if(acc === 3 || acc === -3) {setWinner(acc/3)}
    })
  }

  useEffect(() => {
    setCurrentPlayer(currentPlayer === 1 ? -1 : 1);
    verifyGame()
  }, [gameState])

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
