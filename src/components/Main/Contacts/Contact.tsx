import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledContact = styled.div`
    padding-bottom: 10%;
    @media screen and (max-width: 750px){
        padding-left: 5%
    }
`
const StyledTitle = styled.h3`
    color: #D9D9D9;
    font-size: calc(5px + 2vw);
    font-family: "Kumar One", serif;
    @media screen and (max-width: 750px){
        font-size: calc(5px + 3vw);
    }
`

const ContactName = styled.h4`
    color: #D9D9D9;
    font-size: calc(3px + 2vw);
    @media screen and (max-width: 750px){
        font-size: calc(3px + 3vw);
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    &:link {
        color: #D9D9D9;
    }
    &:visited {
        color: #D9D9D9;
    }
`

export default function Contacts(props: {title: string, link: string, user: string}){
    return (
        <StyledContact>
            <StyledTitle>{props.title}</StyledTitle>
            <ContactName><StyledLink to={props.link} target="_blank">{props.user}</StyledLink></ContactName>
        </StyledContact>

    )
}