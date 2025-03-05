import styled from "styled-components";
import Club from "./Club.tsx";

const StyledClubs = styled.div`
    padding-bottom: 5%;
    padding-left: 2%;
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


export default function Clubs(){

    return (
        <>
            <Heading> Clubs </Heading>
            <StyledClubs>
                <Club name={"BUFSA"}
                      description={"BUFSA is an organization which advocates and celebrates the richness of the Filipino heritage!"}/>
                <Club name={"BostonHacks"}
                      description={"BostonHacks host Boston University’s largest, annual student-run hackathon and various beginner friendly workshops!"}/>
                <Club name={"Girls Who Code"}
                      description={"Girls Who Code aim to empower the community through skill building, networking events, and mentorship with the national Girls Who Code organization. "}/>
            </StyledClubs>
        </>
    )
}