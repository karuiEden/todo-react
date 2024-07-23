import styled from "styled-components";
import {Link} from "react-router-dom";

function LaHeader(){
    return(
        <LaHead className="App-header">
            <LaLink to="/" ><LaH3>LA TODO</LaH3></LaLink>
            <LaNav className="App-nav">
                <LaA href="https://github.com/karuiEden/todo-react">Source</LaA>
                <LaLink to="/about">About</LaLink>
            </LaNav>
        </LaHead>
    )
}

const LaHead = styled.header`
    display: flex;
    margin-top: 2vh;
    flex-direction: row;
    background-color: #1e1e1e;
    border-radius: 10vh;
    padding-left: 3vw;
    padding-right: 3vw;
    justify-content: space-between;
    color: #959595`

const LaNav = styled.nav`
display: flex;
    gap: 3vw;
flex-direction: row;
font-family: Comfortaa, serif;
align-items: center;
justify-content: center;`

const LaH3 = styled.h3`
font-family: AKONY, serif;
`

export const LaLink = styled(Link)`
    &:visited{
        text-decoration: none;
        color: #959595;
    }
    &:active{
        text-decoration: none;
        color: #959595;
    }
    &:hover{
        color: #b8b8b8;
        transition: linear 0.2s;
    }
    color: #959595;
text-decoration: none;`

const LaA = styled.a`
    &:visited {
        text-decoration: none;
        color: #959595;
    }

    &:active {
        text-decoration: none;
        color: #959595;
    }

    &:hover {
        color: #b8b8b8;
        transition: linear 0.2s;
    }

    color: #959595;
    text-decoration: none;
    `
export default LaHeader