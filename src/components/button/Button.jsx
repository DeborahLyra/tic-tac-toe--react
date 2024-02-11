import styled from 'styled-components';


function Button({ children, onClick, disabled }) {
    return (
        <Btn 
        onClick={onClick}
        disabled = {disabled}
        >{children}</Btn>
    )
}

export const Btn = styled.button`
    padding: 10px 20px;
   border: 2px #ffff solid;
   border-radius: 5px;
   background-color: transparent; 
   color: #ffff;
   font-weight: bold;
    cursor: pointer;

    &:hover{
        background-color: #ffff;
        color: black;
    }
`

export default Button
