import styled from 'styled-components';
import Icon from '../icon/Icon';

const GameIcon = ({ iconName }) => <Icon iconName={iconName} size="25px" />


function GameOpition({ status, onClick, $isWinner, $isDraw }) {

  return (
    <Div onClick={onClick} $isWinner={$isWinner} $isDraw={$isDraw}>
      {
        status === 1 && <GameIcon iconName='circle' />
      }

      {
        status === -1 && <GameIcon iconName='x' />
      }

    </Div>
  )
}

export const Div = styled.div`
  border: 2px solid;
  border-radius: 5px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  border-color: ${props =>
    props.$isWinner
      ? 'green'
      : props.$isDraw
        ? 'orange'
        : '#ffff'};
`;


export default GameOpition

