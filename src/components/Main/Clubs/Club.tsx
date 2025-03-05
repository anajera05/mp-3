import styled from "styled-components";

const SingleClub = styled.div`
    padding: 5% 5% 0 0 ;
    @media screen and (max-width: 750px) {
        padding: 5%;
    }

`

const StyledClubName = styled.h3`
    color: #D9D9D9;
    font-size: calc(5px + 2vw);
    font-family: "Kumar One", serif;
    @media screen and (max-width: 750px) {
        font-size: calc(5px + 2vw);
    }
`

const StyledText = styled.p`
    padding: 2%;
    color: #D9D9D9;
    font-size: calc(3px + 1vw);
    @media screen and (max-width: 750px){
        font-size: calc(3px + 2vw);
    }
`

export default function Club(props: {name:string, description:string}){

    return (
        <>
            <SingleClub>
                <StyledClubName>{props.name}</StyledClubName>
                <hr/>
                <StyledText>
                    {props.description}
                    </StyledText>
            </SingleClub>
        </>
    )
}