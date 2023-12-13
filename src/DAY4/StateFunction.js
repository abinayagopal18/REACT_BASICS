import { useState } from "react";

export default function StateFunction()
{
    const[teamName, setTeamName] = useState("TXT");
    const changeTeam = () => setTeamName("BTS");

    const[count, setCount] = useState(0);
    const changeCount = () => setCount(count + 1);

    return(
        <div>
            <p>MY TEAM IS {teamName}</p>
            <button onClick={changeTeam}>CLICK</button>

            <h1>COUNT {count}</h1>
            <button onClick={changeCount}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}