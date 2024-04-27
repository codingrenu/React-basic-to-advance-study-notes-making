import React from "react"
import { useParams } from "react-router-dom"





export default function User (){

   const {id} = useParams()

    return(
        <div>
        <h2>USER PROFILE PAGE</h2>
        <p>USER -ID IS <b> {id} </b></p>
        </div>
    );
}