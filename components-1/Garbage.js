import Car from './Car'

import Apple from './Apple';

function Garbage(){

  const doorisopen =true;

  //const doorisopen =false;

  //const brand ='maruthi';
  //const color ='red';
  
 // using object

  const carInfo = {brand:"maruthi", color:"red" };

 //const carInfo ={};

  const appleInfo ={type :"fujji",color: "blue"}

  const showcarInfo = carInfo.brand !== undefined && carInfo.color !== undefined
  

// list 

  const carList =[

    {brand:"BMW",color:"red"},

    {brand:"Maruthi",color:"blue"},

    {brand:"Tesla",color:"black"},
  ];


  const carcount =[1,2,3,4,5,6];


  return(
      <div>
        <h2>garbage affects health.</h2>
       
        {/* <Car brand ={brand} color ={'red'} /> */}

        {/* <Car brand="maruthi" color ="red"/> */}

        {/* {showcarInfo ? <Car carinfo= {carInfo}/> :null} */}

        {/* {carInfo.brand !==undefined && carInfo.color !== undefined 
        && ?<car carInfo={carInfo}/>:null} */}

        {/* {showcarInfo && <Car carInfo= {carInfo}/>:null} */}

        

        {showcarInfo?<Car carInfo= {carInfo}/>:null}

        <Apple appleInfo ={appleInfo}/>

        {doorisopen?<h2>door is open</h2>:<h2>door is closed</h2>}

        <ul type ="disc">

        { carList.map((carInfo)=> <li key ={carInfo.brand}> <Car carInfo ={carInfo}/></li>)};

        
        </ul>

        <ul>
          { carcount.map((d,index )=><p key={index}>{d}</p>)}
        </ul>

        
      </div>
        
    );
  }

export default Garbage;