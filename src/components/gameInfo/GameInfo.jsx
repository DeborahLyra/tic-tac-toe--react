import styled from 'styled-components';
import Icon from "../icon/Icon";
import Button from '../button/Button';

function GameInfo({ currentPlayer, winner, onReset }) {
    return (
        <DivInfo>
            {
                winner === 0 &&
                <>
                    <h3>Next one:</h3>
                    {
                        currentPlayer === 1 ? <Icon iconName='circle' /> : <Icon iconName='x' />
                    }
                </>
            }
            {
                winner !== 0 &&
                <>
                    <h3>End Game!</h3>
                    <h4>The winner is:</h4>
                    {
                        winner === 1 ? <Icon iconName='circle' /> : <Icon iconName='x' />
                    }
                   
                </>
            }
             <Button 
             onClick={onReset}
             disabled= {winner === 0}>
                Play Again
             </Button>

        </DivInfo>
    )
}

// disabled= {winner === 0} = precisa de um true ou false

export const DivInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
padding: 20px;
transition: all 2s ease-in-out;
`;



export default GameInfo
