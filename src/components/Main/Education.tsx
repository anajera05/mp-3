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

const SingleSchool = styled.div`
    padding: 5% 5% 0 0;
    @media screen and (max-width: 750px) {
        margin: 5% 8%
    }

`

const StyledSchoolName = styled.h3`
    color: #D9D9D9;
    font-size: calc(5px + 2vw);
    font-family: "Kumar One", serif;
    @media screen and (max-width: 750px) {
        font-size: calc(5px + 3vw);
    }    
`

const StyledDescription = styled.h4`
    color: #D9D9D9;
    padding-top: 1vh;
    font-size: calc(3px + 2vw);
    @media screen and (max-width: 750px) {
        font-size: calc(3px + 3vw);
    }
`


export default function Education(){

    return (
        <>
            <Heading> Education </Heading>
            <SingleSchool>
                <StyledSchoolName>Boston University</StyledSchoolName>
                <StyledDescription>Class of 2027 | Computer Science</StyledDescription>
            </SingleSchool>
            <SingleSchool>
                <StyledSchoolName>Randolph High School</StyledSchoolName>
                <StyledDescription>Class of 2023</StyledDescription>
            </SingleSchool>
        </>
    )
}