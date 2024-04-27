/*
import React from "react";

class Apple extends  React.Component{

    render(){
        return(
            <h2>I'am Apple! </h2>
        )
    }

}

export default Apple;


*/

import React from "react";

class Apple extends  React.Component{

    render(){
        const {appleInfo} = this.props;
        const {type,color} = appleInfo;
        return(
            <h2>I'am a {color} {type} Apple phone!. </h2>
        )
    }

}

export default Apple;