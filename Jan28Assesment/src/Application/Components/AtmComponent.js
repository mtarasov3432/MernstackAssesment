import React, {useState, useEffect} from "react";

export default class AtmComponent extends React.Component{
    constructor(props){
        super(props)
        state={
            value:0,
            denomArray:[]
        }
    }

    valueChange = (evt) =>{
        let changedValue = evt.target.value
        this.setState(changedValue)
    }

    calculation(stateValue){
        
    }


    render(){
        return(
            <>
            
            </>
        )
    }
}
