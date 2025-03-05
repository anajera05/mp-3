import styled from "styled-components";

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


export default function Education(props: {schoolName: string, class: string, major: boolean, majorTitle: string}) {

    return (
            <SingleSchool>
                <StyledSchoolName>{props.schoolName}</StyledSchoolName>
                <StyledDescription>{props.class} {props.major ? `| ${props.majorTitle}` : ""}</StyledDescription>
            </SingleSchool>

    )
}