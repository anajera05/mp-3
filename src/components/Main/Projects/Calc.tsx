import styled from "styled-components"
import {useState} from "react";

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    padding: 10%;
    background-color: #d7ecfa;
    border-radius: 3vw;
    margin: 5% auto;
`

const StyledInput = styled.input`
    padding: 1.5%;
    margin: 1%;
    border: #7361A2FF;
    @media screen and (max-width: 750px) {
        padding: 3%;
        margin: 2%;        
    }
`

const StyledButton = styled.button`
    width: 5vw;
    height: 10vh;
    font-size: calc(5px + 1vw);
    background-color: rgba(255, 255, 255, 0.8);
    border: transparent;
    box-shadow: 0 1vw 2vw rgba(115, 97, 162, 0.5);
    color: #7361A2FF;
    margin: 1%;
    @media screen and (max-width: 750px){
        font-size: calc(5px + 3vw);
        width: 10vw;
        height: 6vh;       
    }
`

const ButtonDiv = styled.div`
    padding: 2% 0;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 750px){
        display: inline-block;
        max-width:70%;
    }
`

const StyledOutput = styled.h3`
    font-size: calc(6px + 2vw);
    color: #7361A2FF;
    @media screen and (max-width: 750px){
        font-size: calc(8px + 3vw);       
    }
`
const StyledNegativeOutput = styled(StyledOutput)`
    color: red;
`


export default function Calc(){
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [result, setResult] = useState("");
    const [isNegative, setIsNegative] = useState(false);


    function useOperation(operation:string) {
        const firstNum = Number(firstNumber)
        const secondNum = Number(secondNumber)
        let sum = 0

        if (operation === "clear"){
            setResult("")
            setFirstNumber("")
            setSecondNumber("")
        }
        else if (operation === "+") {
            sum = (firstNum + secondNum)

        }
        else if (operation === "-") {
            sum = (firstNum - secondNum)
        }
        else if (operation === "*") {
            sum = (firstNum * secondNum)
        }
        else if (operation === "/") {
            sum = (firstNum / secondNum)
        }
        else if (operation === "^"){
            sum = 1;
            if (secondNum < 0) {
                for (let i = 0; i < secondNum * -1; i++) {
                    sum = sum * firstNum;
                }
                sum = 1 / sum;
            } else if (secondNum === 0) {
                sum = 1;
            } else {
                for (let i = 0; i < secondNum; i++) {
                    sum = sum * firstNum;
                }
            }

        }

        setResult(sum.toString())
        setIsNegative(sum < 0)

    }

    return (
        <StyledMain>
            <label htmlFor="first-number"></label>
            <StyledInput id="first-number" placeholder="First Number" value={firstNumber} onChange={(e) => setFirstNumber(e.target.value)}/>
            <label htmlFor="second-number"></label>
            <StyledInput id="second-number" placeholder="Second Number" value={secondNumber} onChange={(e) => setSecondNumber(e.target.value)}/>

        <ButtonDiv>
            <StyledButton onClick={() => useOperation("+")}>+</StyledButton>
            <StyledButton onClick={() => useOperation("-")}>-</StyledButton>
            <StyledButton onClick={() => useOperation("*")}>*</StyledButton>
            <StyledButton onClick={() => useOperation("/")}>/</StyledButton>
            <StyledButton onClick={() => useOperation("^")}>^</StyledButton>
            <StyledButton onClick={() => useOperation("clear")}>clear</StyledButton>
        </ButtonDiv>
        {isNegative ? <StyledNegativeOutput >{result}</StyledNegativeOutput> : <StyledOutput>{result}</StyledOutput>}
    </StyledMain>
    )
}