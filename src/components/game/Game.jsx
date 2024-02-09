import GameOpition from "../gameOpition/GameOpition"
import styled from 'styled-components';

function Game() {
  return (
    <Div>
      <GameOpition/>
      <GameOpition/>
      <GameOpition/>
      <GameOpition/>
      <GameOpition/>
      <GameOpition/>
      <GameOpition/>
      <GameOpition/>
      <GameOpition/>
    </Div>
  )
}

export const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export default Game
