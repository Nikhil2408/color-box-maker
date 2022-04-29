import React from "react";

import styles from "../styles/ErrorModal.module.css";

function ErrorModal(props){
    return (
        <div>
            <div className = {styles.backdrop} onClick= {props.onCloseModal}/>
            <div className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <div className = {styles.action}>
                    <button onClick = {props.onCloseModal}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default ErrorModal;