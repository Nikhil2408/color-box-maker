import React from "react";

import styles from "../../styles/Box.module.css";

function Box(props){
    return (
        <div className = {styles.Box} style={
            {height: props.boxDetails.height + "px", width: props.boxDetails.width + "px", backgroundColor: props.boxDetails.bgColor, margin: "5px"}
        }>
            <button name = {props.id} onClick = {props.removeBox}>Remove Me!</button>
        </div>
    )
}


export default Box;