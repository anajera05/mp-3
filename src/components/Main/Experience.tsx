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

const WorkDiv = styled.div`
    padding-bottom: 5%;
    padding-left: 2%;
`

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

export default function Experience(){

    return (
        <>
            <Heading> Experience </Heading>
            <WorkDiv>
                <JobDiv>
                    <EmployerHeader>Boston University IT Help Center</EmployerHeader>
                    <hr/>
                    <JobInfoText>Boston, MA</JobInfoText>
                    <JobInfoText>Information Technology Specialist</JobInfoText>
                    <Description>
                        <li>Provided exceptional customer service by addressing over 100 phone and in-person inquiries
                            monthly to a
                            school with over 30,000+ students regarding software/hardware issues.
                        </li>
                        <li>Resolved technical issues efficiently using knowledge of systems such as Microsoft Office,
                            Windows Operating
                            Systems, and ServiceNow, enhancing customer satisfaction and loyalty.
                        </li>
                    </Description>
                </JobDiv>
                <JobDiv>
                    <EmployerHeader>Arrayscape Gaming</EmployerHeader>
                    <hr/>
                    <JobInfoText>Boston, MA</JobInfoText>
                    <JobInfoText>Event Host</JobInfoText>
                    <Description>
                        <li>Facilitated and conducted engaging events for groups of 5-10 elementary and middle school
                            children focused on
                            gaming services to promote enriching and educational experiences
                        </li>
                        <li>Collaborated with educators and libraries to ensure alignment with educational goals and
                            objectives.
                        </li>
                    </Description>
                </JobDiv>
            </WorkDiv>
        </>
    )
}