

//class components using react state.

import React from "react";

class Car extends React.Component{
    
    constructor (){

        super();
        this.state = {color:"red",model:"maruthi",price:"25,00000"}
    }

  render(){
        return(
            <div>

             <h2> my car color is {this.state.color}
             and model is {this.state.model}  & suitable price is {this.state.price}</h2>

             {/* <button onClick={()=>{this.setState({color:"blue"})}}>
             change color</button> */}

             <button onClick = {() => {this.setState((previousstate) =>
             {return{...previousstate, color:"blue",price:"35,00000"}})}}>change color</button>

           </div>
        
        );
    }
}

export default Car;