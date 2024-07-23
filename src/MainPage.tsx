import Tasks from "./tasks.tsx";
import styled from "styled-components";

function LaApp(){
    return (
       <Menu>
           <Tasks/>
           {/*<Timer/>*/}
       </Menu>
    )
}

const Menu = styled.div`
display: flex;
flex-direction: row;
margin-left: 0;`

export default LaApp;