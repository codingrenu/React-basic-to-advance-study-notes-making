import { useNavigate } from "react-router-dom";

export default function Login (){

const navigate =useNavigate();


// dashboard page ope purpose create this function.

function onsubmit(){
    // credintials pupose 
    //credentialls is sucessfully
    //navigate to pupose this is listed below
    
    navigate('/DashBoard')


}

    return(

        <div>
        <h2>LOGIN PAGE</h2>
        

        {/* {button click go to dashboard so use and function onsubmit will use} */}

        <button onClick={onsubmit}> Login </button>
        </div>
    );
}