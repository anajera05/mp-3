import styled from "styled-components";

export default function Header(){
    const StyledHeader = styled.header`
        display: flex;
        flex-direction: column;
        padding: 4vh 2vw;
        background-color: #D9D9D9;
        color: #0B3364;
        @media screen and (max-width: 750px) {
            align-items: center;
            padding: 2vh 2vw;
        }
    `
    const StyledH1 = styled.h1`
        font-family: "Kumar One", serif;
    `

    return(
        <StyledHeader>
            <StyledH1>Alyssa Najera</StyledH1>
            <p>My Online Resume </p>
        </StyledHeader>
    )
}