import { useState } from "react"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");


    function signInHandler() {
        
        setMessage('Loading...')
        if(email == 'kit.2422mmc041@gmail.com' && password == 'test@132') {
            
            setTimeout(()=>{

            setMessage(' Login Successfully!')
            },3000)
                
            }else{

                setTimeout(()=>{

                    setMessage(' Invalid credentials!')
                    },3000)
            }
           
        
    }

    return <div>
        <h1>Login</h1>
        <input type="text"  placeholder="Email" onChange={(e) => setEmail(e.target.value) }  /><br/>
        <input type="password"  placeholder="Password" onChange={(e) => setPassword(e.target.value) }/><br/>
        <button onClick={signInHandler}>Signin</button>
        {message && <p>{message}</p>}
    </div>
}

