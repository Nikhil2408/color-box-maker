import React from "react";

import Box from "./Box";
import styles from "../../styles/Boxes.module.css";
function Boxes(props){
    return (
        <div className={styles.Boxes}>
            {
                props.boxes.map(box => {
                    return <Box removeBox = {props.removeBox} key={box.id} id = {box.id} boxDetails={box}/>
                })
            }
        </div>
    )
}

export default Boxes;