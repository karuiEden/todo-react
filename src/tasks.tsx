import {useEffect, useState} from "react";
import axios from 'axios'
import {AxiosResponse} from "axios";
import TaskUnit from "./taskUnit.tsx";
import styled from "styled-components";

export interface Task {
    ID: number;
    name: string;
    IsCompleted: boolean;
    CreatedAt: string;
}

export const apiUrl:string= "***";


function Tasks(){
    const [tasks, setTasks]= useState([]);
    useEffect(() => {
        axios.get(apiUrl).then((resp: AxiosResponse) => {
            const allTasks = resp.data;
            setTasks(allTasks);
        }).catch((err: Error) => {console.log(err)});
    }, [setTasks]);
    const showTask = tasks.map((task: Task) =>
        <ElementList key={task.ID}><TaskUnit id={task.ID}  /></ElementList>
    );
    return (
        <TaskList>
            {showTask}
        </TaskList>
    )
}

const TaskList = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 3vh;`

const ElementList = styled.li`
margin-left: -2.5vw;`
export default Tasks;