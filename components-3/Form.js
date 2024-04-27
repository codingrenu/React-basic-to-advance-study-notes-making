//react form create

import { useState } from "react";

function Form(){

// all fields  include state in different state 

    //const[name,setName]=useState("")

    //const[age,setAge]=useState("")

    //const[email,setEmail]=useState("")

    //const[number,setNumber]=useState("")


    //console.log('currentstate',name)

// all fields  include state in one state 


const [inputs,setInputs] =useState({number:"+91",email:"@gmail.com",country:"India",about:"Iam a student"});

function handlesubmit(e){

    e.preventDefault();

    console.log("form submitted!")

    //console.log('currentstate',Name,age,email,number);

    console.log('currentstate',inputs);

}

function handlechange(e){
   const Name= e.target.Name

   const value= e.target.value

    setInputs((previousState)=>{return{...previousState,[Name] : value}})
}


    

    return (

        <form onSubmit={handlesubmit}>
        
        {/* <label>Enter your name: <input type="text" onChange={(e)=>{setName(e.target.value)}}/> </label><br/> */}


        {/* {onChange={(e)=>{setInputs({age:e.target.value})}}/> </label><br/>} */}

        
        
        


       {/* <label>Enter your name: <input type="text" onChange={(e)=>{setInputs((previousState)=>{return{...previousState,Name:e.target.value}})}}/> </label><br/>    */}


        <label>Enter your name: <input type="text" Name = "Name"  onChange={handlechange}/> </label><br/>



        {/* <input type="text" name="text" placeholder="Enter your name">
        </input> */}

       
       
       {/* <label>Enter your age: <input type="number" onChange={(e)=>{setAge(e.target.value)}}/> </label><br/> */}

       
       {/* <label> Enter your age: <input type="number" onChange={(e)=>{setInputs((previousState)=>{return{...previousState,age:e.target.value}})}}/> </label><br/> */}


        <label> Enter your age: <input type="number" Name= "age" onChange={handlechange}/> </label><br/>

       


       {/* <label>Enter your email: <input type="text" onChange={(e)=>{setNumber(e.target.value)}}/> </label><br/> */}

       
       {/* <label>Enter your email: <input type="text" onChange={(e)=>{setInputs((previousState)=>{return{...previousState,email:e.target.value}})}}/> </label><br/>  */}


        <label>Enter your email: <input type="text" Name ="email"  onChange={handlechange}/> </label><br/>

       {/* <label>Enter your phone number: <input type="text" onChange={(e)=>{setEmail(e.target.value})}}/> </label><br/> */}

       
      {/* <label>Enter your phone number: <input type="text" required="hidden"onChange={(e)=>{setInputs((previousState)=>{return{...previousState,number:e.target.value}})}}/> </label><br/> */}

        <label>Enter your phone number: <input type="text" Name = "number"   onChange={handlechange}/> </label><br/>

        <label>Enter your country: 
            
            <select type="country"   onChange={handlechange} value={inputs.country}>
                
                
                <option value="Australia">Australia</option>
                <option value="India">India</option>
                <option value="America">America</option>
                <option value="paris">paris</option>
                <option value="Germany">Germany</option>
               </select></label> <br/>

               


               <label>Enter about you:
                
                <textarea name="about" onChange={handlechange} >
                    
                </textarea></label><br/>

        

        







        
        
        <label>submit the form: <input type="submit" value="submit form"/> </label>
        

        </form>
    )
}

export default Form;