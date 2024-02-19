import styled from 'styled-components';
import Icon from "../icon/Icon";
import Button from '../button/Button';

function GameInfo({ currentPlayer, winner, onReset, isDraw }) {
    return (
        <DivInfo>
            {
                isDraw === false && winner === 0  &&
                <>
                    <h3>Next one:</h3>
                    {
                        currentPlayer === 1 ? <Icon iconName='circle' /> : <Icon iconName='x' />
                    }
                </>
            }
            {
                 isDraw === false && winner !== 0 &&
                <>
                    <h3>End Game! The winner is:</h3>

                    {
                        winner === 1 ? <Icon iconName='circle' /> : <Icon iconName='x' />
                    }
                    <Button
                        onClick={onReset}>
                        Play Again
                    </Button>
                </>
            }
            {
                isDraw && 
                <>
                    <h3>It's a Tie!</h3>
                    <Button
                        onClick={onReset}>
                        Play Again
                    </Button>
                </>
            }

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
min-width: 280px;
`;



export default GameInfo
