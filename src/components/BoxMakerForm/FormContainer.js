import React from "react";
import BoxMakerForm from "./BoxMakerForm";
import styles from "../../styles/FormContainer.module.css";

function FormContainer(props){
    return (
        <div className={styles.FormContainer}>
            <BoxMakerForm addBox = {props.addBox}/>
        </div>  
    )
}

export default FormContainer;