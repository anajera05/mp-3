import styled from "styled-components";
import Calc from "./Calc.tsx";

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

export default function Projects(){

    return (
        <>
            <Heading> Projects </Heading>
            <Calc/>
        </>
    )
}