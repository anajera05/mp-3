import styled from "styled-components";
const Heading = styled.h2`
    font-size: calc(10px + 2vw);
    font-family: "Kumar One", serif;
    text-align: center;
    color: #D9D9D9;
    padding-top: 2%;
    @media screen and (max-width: 750px) {
        font-size: calc(10px + 4vw);
        padding-left: 0;
    }
`

const StyledContact = styled.div`
    padding-bottom: 10%;
`
const StyledTitle = styled.h3`
    color: #D9D9D9;
    font-size: calc(5px + 2vw);
    font-family: "Kumar One", serif;
`

const ContactName = styled.h4`
        color: #D9D9D9;
        font-size: calc(3px + 2vw);
`
const StyledLink = styled.a`
    text-decoration: none;
    &:link {
        color: #D9D9D9;
    }
    &:visited {
        color: #D9D9D9;
    }
`

export default function Contact(){
    return (
        <>
            <Heading> Contacts </Heading>
            <StyledContact>
                <StyledTitle>Email</StyledTitle>
                <ContactName>alyssanaj7571@gmail.com</ContactName>
            </StyledContact>
            <StyledContact>
                <StyledTitle>Github</StyledTitle>
                <ContactName><StyledLink href="https://github.com/anajera05" target="_blank">anajera05</StyledLink></ContactName>
            </StyledContact>
            <StyledContact>
                <StyledTitle>LinkedIn</StyledTitle>
                <ContactName><StyledLink href="https://www.linkedin.com/in/alyssa-jane-najera-595a85293/"
                       target="_blank">alyssanaj7571</StyledLink></ContactName>
            </StyledContact>
        </>
    )
}