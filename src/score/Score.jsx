import styled from 'styled-components';
import Icon from '../components/icon/Icon';

function Score({ xScore, circleScore }) {
    return (
        <DivScore >
            <h4>Score:</h4>
            <DivScoreInfo>
                <DivSingleScore>
                    <Icon iconName='circle' />
                    <i className="fa-solid fa-equals"></i>
                    <h2>{circleScore}</h2>
                </DivSingleScore>
                <DivSingleScore>
                    <Icon iconName='x' />
                    <i className="fa-solid fa-equals"></i>
                    <h2>{xScore}</h2>
                </DivSingleScore>
            </DivScoreInfo>
        </DivScore>
    )
}

export const DivScore = styled.div`
    margin-top: 30px;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const DivScoreInfo = styled.div`
   display: flex; 
   gap: 30px; 
   margin-top: 20px; 
`

export const DivSingleScore = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export default Score
