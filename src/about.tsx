import styled from "styled-components";
import {LaLink} from "./head.tsx";

function LaAbout(){
    return(
       <MainDiv>
           <SubDiv>
               <Image src="https://avatars.githubusercontent.com/u/97159954?s=400&u=9057ab9a200ae54ca618e2b32be42294f97ff45e&v=4" alt="Avatar"/>
           </SubDiv>
           <SubDiv>
               <Article>
                   This is my Todo app on React, Vite and TypeScript in frontend and Go on backend. You can check other version this app on <LaLink to="https://github.com/karuiEden/latodo-frontend" >Angular</LaLink> and <LaLink to="https://github.com/karuiEden/latodo-vue">Vue</LaLink>.
               </Article>

           </SubDiv>
       </MainDiv>
    )
}

const MainDiv = styled.div`

    @keyframes spawn {
        from {
            margin-top: 100vmin;
        }
        to{
            margin-top: 5vh;
        }
    }
    
    display: flex;
flex-direction: row;
gap: 5vw;
margin-top: 5vh;
margin-left: 3vw;
margin-right: 3vw;
    animation-name: spawn;
    animation-duration: 1s;
`;

const SubDiv = styled.div`
background-color: #1e1e1e;
border-radius: 10vh;
    overflow: hidden;`;

const Article = styled.p`
color: #959595;
    padding-left: 3vw;
    padding-top: 5vh;
    padding-right: 2vw;
font-family: Comfortaa, serif;`

const Image = styled.img`
height: auto;
    width: auto;
    display: block;
    
`
export default LaAbout;