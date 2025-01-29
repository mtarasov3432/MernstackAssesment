import React from "react";
import { NavLink } from "react-router-dom";


let Header = (props) =>{
    return(
        <>
            <NavLink to="clock" className="button" activeclassname="true">Clock</NavLink>
            <NavLink to="question4" className="button" activeclassname="true">Question 4</NavLink>
        </>
    )
}

export default Header