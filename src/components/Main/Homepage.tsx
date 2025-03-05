import styled from "styled-components";
import headshot from "../../../public/headshot.jpg"

const StyledDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 1vh 2vw;
    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
`
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
const ImageDiv = styled.div`
    width: 50%;
    margin: 1vh auto;
    align-self: flex-end;
    padding-top: 5%;
    @media screen and (max-width: 750px) {
    width: 40vw;
    margin: 0 auto;
    align-self: flex-end;
    padding-top: 0
}

`

const StyledImage = styled.img`
    width: 80%;
    margin: auto;
    @media screen and (max-width: 750px) {
        width: 100%;
        margin: 1vh auto;
    }
`

const StyledText = styled.p`
    padding-top: 5%;
    font-size: calc(5px + 2vw);
    color: #D9D9D9;
    text-align: center;
    @media screen and (max-width: 750px) {
        padding-top: 0;
    }
`

const TextDiv = styled.div`
    align-self: center;
    width: 60%;
    margin: 1vh auto;
    font-size: calc(3px + 2vw);
    @media screen and (max-width: 750px) {
        width : 100%;
    }
`

export default function Homepage(){

    return(
        <>
            <Heading> Home </Heading>
            <StyledText>Hello and welcome to my resume! Feel free to check out the sections listed on the navigation.</StyledText>
            <StyledDiv>
                <ImageDiv>
                    <StyledImage src={headshot} alt="Headshot of Alyssa Najera"/>
                </ImageDiv>
                <TextDiv>
                    <StyledText>
                        My name is Alyssa Najera, and I am a Computer Science Student at Boston
                        University. I am an aspiring Software Engineer with an interest in Web/App development and
                        UI/UX design!
                    </StyledText>
                </TextDiv>
            </StyledDiv>
        </>
    )
}