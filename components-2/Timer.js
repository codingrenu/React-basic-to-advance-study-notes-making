// understanding use effect

import { useEffect,useState } from "react";



function Timer(){

    //const [count,setcount] = useState(0);
    
    const [count,setcount] = useState(1);
    useEffect(()=> {

        console.log("refersh render pages");
        checkout();
    },[count])


// using usestate


   //const [count,setcount] = useState(0);


function updatecount(){

    setcount((previousstate)=>{ return previousstate+1});

}

function checkout(){
    
    if( count>10){

        setcount('1');
    };
    
};



/*

understanding useEffect in different ways...


function Timer(){


    const [count,setcount] = useState(0);
    useEffect(()=> {

        console.log("refersh render pages");
        //checkout();
        //setcount(1);

        setTimeout((previousstate) => {return previousstate +1})

},1000)

}) */








    return(
        <div>
            <h1>I have rendered react{count} pages!</h1>



            <button onClick={updatecount}>Increase count</button>


        </div>
    );

}

export default Timer;