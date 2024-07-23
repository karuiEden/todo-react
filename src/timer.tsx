import CreateTask from "./createTask.tsx";

function Timer(){
    let clock = 0;
    let timerTrigger: number;
    const timer = () =>{ timerTrigger = setInterval(() => {
        ++clock;
    }, 1000)};
    const stopTimer = ()=> clearInterval(timerTrigger);
    return (
        <div>
            <p>{clock}</p>
            <div>
                <input type="image" alt="start" onClick={timer}/>
                <input type="image" alt="stop" onClick={stopTimer}/>
            </div>
            <CreateTask/>
        </div>
    )
}

export default Timer;