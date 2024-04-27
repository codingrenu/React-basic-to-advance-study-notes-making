// updating arrays  in state.

import { useState } from "react";

function List() {

    // const [List,setList]= useState(['test1','test2']);

    //dynamically update this code use.



    const [List,setList]= useState([]);


    const [count,setcount]= useState(1);



//updating defaultpurpose so create the function


function AddItem() {

    const itemName = 'item'+count;

    setList((previousstate) => {return[...previousstate,itemName]});

    //increment purpose

    setcount((previousstate) => {return  previousstate+1 });
}


//items view in inspect purpose so tis code is use.

    console.log('current state',List);

    return ( 

        <div>

             <h1>List</h1>

             <button onClick={AddItem}> Add Item </button>


            <ul>

              {List.map((el,index) => <li key={index} >{el}</li>)}

              {/* <li>Item name</li> */}

            </ul>
            
            
            
        </div>
    );
}


export default List;