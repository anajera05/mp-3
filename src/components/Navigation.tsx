import styled  from "styled-components";
import { Link } from "react-router"

export default function Navigation(){
    const StyledNav = styled.nav`
        width: 30%;
        padding-right: 3vw;
        background-color: #041a35;
        @media screen and (max-width: 750px) {
            width: 100%;
            background-color: #D9D9D9;
            display: flex;
            justify-content: center;
            padding-right: 0;
            height: 10%;
        }
    `
    const StyledNavItem = styled.li`
        font-family: "Kumar One", serif;
        font-size: calc(10px + 1vw);
        width: 100%;
        margin: 2vh auto;
        display: flex;  
        justify-content: center;  
        align-items: center; 
        text-align: center;
        background-color: #0B3364;
        @media screen and (max-width: 750px) {
            font-size: calc(3px + 1vw);
            padding: 1vw;
            margin: auto 1vw;
        }
    `

    const StyledList = styled.ul`
        display: flex;
        flex-direction: column;
        list-style: none;
        padding-top: 2vh ;
        padding-bottom: 2vh ;
        @media screen and (max-width: 750px) {
            flex-direction: row;
            justify-content: center;
            background-color: #D9D9D9;
            list-style: none;
            padding-left: 0;
            text-align: center;
        }
    `
    const StyledLink = styled(Link)`
        color: #D9D9D9;
        background-color: transparent;
        text-decoration: none;
        padding: 1vw;
    `
    return(
        <StyledNav>
            <StyledList>
                <StyledNavItem><StyledLink to="/">Home</StyledLink></StyledNavItem>
                <StyledNavItem><StyledLink to="/education">Education</StyledLink></StyledNavItem>
                <StyledNavItem><StyledLink  to="/experience">Experience</StyledLink></StyledNavItem>
                <StyledNavItem><StyledLink  to="/projects">Projects</StyledLink></StyledNavItem>
                <StyledNavItem><StyledLink  to="/clubs">Clubs</StyledLink></StyledNavItem>
                <StyledNavItem><StyledLink  to="/contact">Contact</StyledLink></StyledNavItem>

            </StyledList>
        </StyledNav>
    )
}