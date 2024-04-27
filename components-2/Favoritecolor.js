// react using create react state

import { useState } from "react";


function Favoritecolor() {
    //let color = 'blue';

   const [color,setcolor]  =  useState('blue');

    return (
      <div>
        <h2>My favorite color is {color}</h2>

        {/* <button onClick={() => { color = 'blue' }}>Change color</button> */}
        <button onClick={() => { setcolor('doggerblue') }}>Change color</button>
      </div>
    );
  }
  
  export default Favoritecolor;
  