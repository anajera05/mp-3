import styled from "styled-components";
import School from "./School.tsx";

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


export default function Education(){

    return (
        <>
            <Heading> Education </Heading>
            <School schoolName={"Boston University"}
                    class={"Class of 2027"}
                    major={true}
                    majorTitle={"Computer Science"}/>
            <School schoolName={"Randolph High School"}
                    class={"Class of 2023"}
                    major={false}
                    majorTitle={""}/>
        </>
    )
}