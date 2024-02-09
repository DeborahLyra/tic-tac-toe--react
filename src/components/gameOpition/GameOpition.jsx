import styled from 'styled-components';
import Icon from '../icon/Icon';

const GameIcon = ({ iconName }) => <Icon iconName={iconName} size="25px" />

function GameOpition({ status, onClick }) {
  return (
    <Div onClick={onClick}>
      {
        status === 1 && <GameIcon  iconName='circle'/>
      }

      {
        status === -1 && <GameIcon  iconName='x'/>
      }

    </Div>
  )
}

export const Div = styled.div`
  border: 2px #fff solid;
  border-radius: 5px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default GameOpition

