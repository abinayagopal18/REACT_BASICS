import React from "react";

export default function ListKeys()
{
    const team = ["INDIA" , "AUSTRALIA", "NEW-ZEALAND", "ENGLAND"]
    const teamName = team.map((tname,index) => <li key={index}> {index} = {tname}</li>)
    return(
        <div>
            <ul type="none">
            {teamName}
            </ul>
        </div>
    )
}