import styled from "styled-components";
import Job from "./Job.tsx"


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


export default function Experience(){

    return (
        <>
            <Heading> Experience </Heading>
            <WorkDiv>
                <Job
                    employer={"Boston University IT Help Center"}
                    loc={"Boston, MA"}
                    pos={"Information Technology Specialist"}
                    description1={"Provided exceptional customer service by addressing over 100 phone and in-person inquiries monthly to a school with over 30,000+ students regarding software/hardware issues."}
                    description2={"Resolved technical issues efficiently using knowledge of systems such as Microsoft Office, Windows Operating Systems, and ServiceNow, enhancing customer satisfaction and loyalty."}/>
                <Job
                    employer={"Arrayscape Gaming"}
                    loc={"Boston, MA"}
                    pos={"Event Host"}
                    description1={"Facilitated and conducted engaging events for groups of 5-10 elementary and middle school children focused on gaming services to promote enriching and educational experiences"}
                    description2={"Collaborated with educators and libraries to ensure alignment with educational goals and objectives."}/>

            </WorkDiv>
        </>
    )
}