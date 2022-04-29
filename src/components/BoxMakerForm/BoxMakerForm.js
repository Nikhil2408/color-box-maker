import React, {useState} from "react";

import allColors from "../allColors";
import styles from "../../styles/BoxMakerForm.module.css";
import {v4 as uuidv4} from "uuid";
import ErrorModal from "../ErrorModal";

function BoxMakerForm(props){

    const [userInput, setUserInput] = useState({
        height: "",
        width: "",
        bgColor: "noColor"
    });

    const [errorDetails, setErrorDetails] = useState({
        status: false,
        title: "",
        message : ""
    });

    function changeHandler(eventObj){
        setUserInput(function(currentState){
            return {
                ...currentState,
                [eventObj.target.name] : eventObj.target.value
            }
        })
    }

    function submitHandler(eventObj){
        eventObj.preventDefault();
        if(userInput.height < 0 || userInput.width < 0){
            setErrorDetails({
                status: true,
                title: "Invalid Height or Width",
                message: "Height or Width cannot be negative"
            })
        }
        else if(userInput.height.length === 0 || userInput.width.length === 0 || userInput.bgColor === "noColor"){
            setErrorDetails({
                status: true,
                title: "Fields cannot be Empty",
                message: "Please provide some input to height, width or background color field"
            })
        }
        else{
            props.addBox({...userInput, id: uuidv4()});
        }
    }

    function onCloseModal(){
        setErrorDetails({
            status: false,
            title: "",
            message: ""
        })
    }

    return (
        <div>
            {
                errorDetails.status ? <ErrorModal title={errorDetails.title} message={errorDetails.message} onCloseModal = {onCloseModal}/> : ""
            }
            <form className={styles.BoxMakerForm} onSubmit = {submitHandler}>
                <label htmlFor="height">Height: (in px)</label>
                <input type="number" id="height" name="height" placeholder = "Enter the height" value = {userInput.height} onChange = {changeHandler} />
                <label htmlFor="width">Width: (in px)</label>
                <input type="number" id="width" name="width" placeholder = "Enter the width" value = {userInput.width} onChange={changeHandler} />
                <label htmlFor="bgColor">Background Color:</label>
                <select id="bgColor" name="bgColor" value = {userInput.bgColor} onChange={changeHandler}>
                    <option value="noColor">Choose A Color</option>
                    {
                        allColors.map(color => {
                            return <option key={color} value={color}>{color.toUpperCase()}</option>
                        })
                    }
                </select>
                <button>Add Box</button>
            </form>
        </div>
        
    )
}

export default BoxMakerForm;