import React from 'react'

export default function TryCatch({player}) {
    try{
        if(player !== "HARDIC")
        {
            throw new Error("NOT AN MI CAPTAIN");
        }
    }
    catch(error)
    {
        document.write(error);
    }
    finally
    {
        document.writeln( "ROHIT IS ALWAYS A CAPTAIN");

    }
  return (
    <div>
        <hi>{player}</hi>
    </div>
  )
}
