import styled from "styled-components";

export default function Footer(){
    const StyledFooter = styled.footer`
        background-color:#D9D9D9;
        color: #0B3364;
        padding: 1vh 1vw;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        font-size: calc(3px + 1vw);
        @media screen and (max-width: 750px) {
            font-size: calc(3px + 2vw);
        }
    `
    const StyledLink = styled.a`
        color: #0B3364;
    `
    return(
    <StyledFooter>
        <p>All rights reserved by Alyssa Najera: <StyledLink href="">Credits</StyledLink> &#169;</p>
    </StyledFooter>
    )
}