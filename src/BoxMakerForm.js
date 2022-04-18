import React, {Component} from "react";

class BoxMakerForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            height: 0,
            width: 0,
            bgColor: ""
        }
    }
    render(){
        return (
            <div>
                <form>
                    <label htmlFor = "height">Height: </label>
                    <input 
                        type="number" 
                        id = "height"
                        name = "height"
                        placeholder = "Enter the height for the box"
                        value = {this.state.height}
                    />

                    <label htmlFor = "width">Width: </label>
                    <input
                        type="number"
                        id="width"
                        name="width"
                        placeholder = "Enter the width for the box"
                        value = {this.state.width}
                    />

                    <label htmlFor = "bgColor">Background Color: </label>
                    
                </form>
            </div>
        )
    }
}

export default BoxMakerForm;