function Demo()
{
    return(
        <div>
           DEMO <input type = "checkbox" id="hi" name="DEMO" value="HI"></input>HI
           <input type = "checkbox" id="HAY" name="DEMO" value="HAY"></input>HAY
           <input type = "checkbox" id="HELLO" name="DEMO" value="HELLO"></input>HELLO
        </div>
    )
}

export default function OneExport()
{
    return (
        <div>
            <Demo/>
            <p style={{fontSize:"80PX"}}> GIVE FEEDBACK</p>
        </div>
    )
}