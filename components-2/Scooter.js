

// multiple state in usestate Hooks

import { useState } from "react"


function Scooter(){

    //const [color , setcolor] = useState("Red")
    //const [brand , setbrand] = useState("Honda")
    //const [model , setmodel] = useState("6GActiva")
    //const [year , setyear] = useState("2024")


// above same as implement multilpe state used in object

const [Scooter,setScooter] =useState(
        
    {
            color :"red",
            brand :"Honda",
            model :"6GActiva",
            year : "2024"
    }
);

function updatecolor () {
            //setScooter ({color:"blue"});

            setScooter(previousstate=>{
                return {...previousstate, color:"blue", brand:"maruthi"}
         })
    };
   
  
    
// {current state can use the inspect page uasge but this time iam using arrys concept so 
// {comment this line is necessary}

console.log('current state',Scooter)


    return(
        <div>
            <h2>My Scooter</h2>
            
            {/* <p>color: {color}</p> */}

            <p>color: {Scooter.color}</p>

            

            {/* <p>Brand: {brand} </p> */}

            <p>Brand: {Scooter.brand} </p>

            

            {/* <p>model: {model}</p> */}

            <p>model: {Scooter.model}</p>

            

            {/* <p> Year : {year} </p> */}
            <p> Year : {Scooter.year} </p>

            
           <button onClick={updatecolor}>change color</button>
        </div>
    );
}

export default Scooter;

