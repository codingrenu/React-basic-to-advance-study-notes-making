// css  in react 

import './Styling.css';

import styles from './Styling.module.css';

function Styling(){

   const mystyle = {

        color:"white",
        backgroundColor:"red",
        padding: "10px",
        fontFamily:"sanserif",

    }

    return (
        <div>
            {/* <h2 style={{color:"red"}}>I'am learning css in react</h2> */}

           
            {<h2 style={mystyle}><q>I'am learning css in react</q></h2>}
            
            <p className={styles.hyperlink}><button><marquee>hai react</marquee></button></p>
        </div>
    );
}

export default Styling;