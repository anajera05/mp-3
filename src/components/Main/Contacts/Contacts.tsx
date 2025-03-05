import styled from "styled-components";
import Contact from "./Contact.tsx";

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
export default function Contacts(){
    return (
        <>
            <Heading> Contacts </Heading>
            <Contact title={"Email"}
                     link={""}
                     user={"alyssanaj7571@gmail.com"}/>
            <Contact title={"Github"}
                     link={"https://github.com/anajera05"}
                     user={"anajera05"}/>
            <Contact title={"LinkedIn"}
                     link={"https://www.linkedin.com/in/alyssa-jane-najera-595a85293/"}
                     user={"alyssanaj7571"}/>
        </>
    )
}