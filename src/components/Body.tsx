import Header from "./Header.tsx"
import Navigation from "./Navigation.tsx"
import Homepage from "./Main/Homepage.tsx"
import Education from "./Main/Education.tsx"
import Experience from "./Main/Experience.tsx"
import Projects from "./Main/Projects/Projects.tsx"
import Clubs from "./Main/Clubs/Clubs.tsx"
import Contact from "./Main/Contact.tsx"
import Footer from "./Footer.tsx"
import styled from "styled-components";
import { createBrowserRouter, Route, RouterProvider, Routes} from "react-router";



const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    width : 100%;
    background-color: #0B3364;
    justify-content: center;
    @media screen and (max-width: 750px) {
        height: 100vh;
        flex-direction: column;
    }
`

const PageAdjustments = styled.div`
    margin: 0 auto;
    top: 0;
    box-sizing: border-box;
    width: 80vw;
    height: 100%
`

const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    width:70%;
    background-color: #0B3364;
    padding: 1vh 2vw;
    @media screen and (max-width: 750px) {
        width:100%;
        min-height: 90%;
        height: 100vh
    }
`


function Root(){
    return(
        <PageAdjustments>
            <Header/>
            <StyledContainer>
                <Navigation/>
                <StyledMain>
                    <Routes>
                        <Route path="/" element={<Homepage/>}/>
                        <Route path="/education" element={<Education/>}/>
                        <Route path="/experience" element={<Experience/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                        <Route path="/clubs" element={<Clubs/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>
                </StyledMain>
            </StyledContainer>
            <Footer/>
        </PageAdjustments>
    )
}

const router = createBrowserRouter([{ path: "*", Component: Root}])

export default function Body(){
    return <RouterProvider router={router}/>

}