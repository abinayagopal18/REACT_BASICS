import { useState } from "react";

export default function StateHoldsObject()
{
    const[player,setPlayer] = useState({name:"VIRAT", num:18, sport:"CRICKET"});
    const changeName = () =>{
        setPlayer((prevName) =>{return{...prevName,name:"BOULT"}})
    };

    return(
        <div>
            <p>Details: {player.name} {player.num} {player.sport} .</p>
            <button onClick={changeName}>CHANGE</button>
        </div>
    )
}
