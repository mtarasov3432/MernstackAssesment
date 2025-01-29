import React from "react";
import TimeComponent from "./Components/timeComponent";
import Question4Component from "./Components/question4";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Components/Header";
import "./app.css"

export default class Application extends React.Component{
    // constructor(props){
    //     super(props);

    //     let date = new Date()
    //     let time = date.getHours() 
    //     + ':' + date.getMinutes() 
    //     + ":" + date.getSeconds();
        
    //     this.state={
    //         time : time
    //     }
    // }
    render(){
        return(
            <Router>
                <Header/>
                    <Routes>
                        <Route path="clock" element={<TimeComponent/>}/>
                        <Route path="question4" element={<Question4Component/>}/>
                    </Routes>
            </Router>
        )
    }
}