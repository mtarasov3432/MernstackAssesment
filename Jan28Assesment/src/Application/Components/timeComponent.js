import React, {useState, useEffect} from "react";

let TimeComponent = (props) =>{
    const [time, setTime] = useState("")

    useEffect(()=>{
        setInterval(()=>{
            const date = new Date()

            const hours = date.getHours()
            const minutes = date.getMinutes()
            const seconds = date.getSeconds()

            const currTime = hours+":"+minutes+":"+seconds

            setTime(currTime)
        }, 1000)
    },[])
 
    return (
        <div>
            <h1 align="center">Current Time</h1>
            <h2 align="center"> {time}</h2>
        </div>
    )
}

export default TimeComponent