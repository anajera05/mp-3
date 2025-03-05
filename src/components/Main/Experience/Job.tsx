import styled from "styled-components";

const JobDiv = styled.div`
    padding: 5% 5% 0 0;
`

const EmployerHeader = styled.header`
    color: #D9D9D9;
    font-size: calc(5px + 2vw);
    font-family: "Kumar One", serif;
`

const JobInfoText = styled.h4`
    color: #D9D9D9;
    font-size: calc(5px + 1vw);
    @media screen and (max-width: 750px) {
        font-size: calc(5px + 2vw);
    }
`

const Description = styled.ul`
    padding: 2%;
    color: #D9D9D9;
    font-size: calc(5px + 1vw);
    @media screen and (max-width: 750px) {
        font-size: calc(5px + 2vw);
    }
`

export default function Job(props: {employer: string, loc: string, pos: string, description1: string, description2: string}) {

    return (
        <>
            <JobDiv>
                <EmployerHeader>{props.employer}</EmployerHeader>
                <hr/>
                <JobInfoText>{props.loc}</JobInfoText>
                <JobInfoText>{props.pos}</JobInfoText>
                    <Description>
                        <li>{props.description1}</li>
                        <li>{props.description2}</li>
                    </Description>
                </JobDiv>
        </>
    )
}