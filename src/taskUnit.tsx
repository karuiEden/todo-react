import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {apiUrl, Task} from "./tasks.tsx";
import styled from "styled-components";

interface TaskUnitProps {
    id?: number
}

function TaskUnit(props: TaskUnitProps) {
    const [task, setTask] = useState<Task>({CreatedAt: "", ID: 0, IsCompleted: false, name: ""});
    useEffect(() => {
        axios.get(apiUrl + "/" + props.id).then((resp: AxiosResponse) => {
            const currentTask = resp.data;
            setTask(currentTask);
        }).catch((err: Error) => {
            console.log(err)
        });
    }, [props, setTask]);

    const handleComplete = () =>{
        const updatedTask = task;
        updatedTask.IsCompleted = !updatedTask.IsCompleted;
        setTask(updatedTask);
    }

    return (
        <TaskBlock>
            <input type="checkbox" checked={task.IsCompleted} onChange={handleComplete} />
            <p>{task.name}</p>
            <p>{task.CreatedAt}</p>
            <input type="image" src="/delete-btn.svg" alt="delete-button"/>
        </TaskBlock>
    )
}

const TaskBlock = styled.div`
    border-radius: 10vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: Comfortaa, serif;
    color: #959595;
    width: 60vw;
    height: 6vh;
    padding-left: 1vw;
    padding-right: 3vw;
    background-color: #1e1e1e;
`


export default TaskUnit;