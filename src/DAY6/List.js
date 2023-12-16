import React from "react";

export default function List()
{
    const team = ["INDIA" , "AUSTRALIA", "NEW-ZEALAND", "ENGLAND"]
    const teamName = team.map((tname,index) => <li key={index}>{tname}</li>)
    return(
        <div style={{color:"ghostwhite",fontFamily:"cursive"}}>
            <ol>
            {teamName}

            </ol>
        </div>
    )
}