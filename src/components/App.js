import React, {useState} from "react";

import '../styles/App.css';
import FormContainer from './BoxMakerForm/FormContainer';

import Boxes from "./BoxesList/Boxes";

function App() {

  const [boxes, setBoxes] = useState([]);

  function addBox(newBox){
    setBoxes(function(currentState){
      return [...currentState, newBox]
    })
  }

  function removeBox(eventObj){
    const boxId = eventObj.target.name;
    setBoxes(function(currentState){
      return boxes.filter(box => {
        return box.id !== boxId;
      })
    });
  }

  return (
    <div className="App-header">
      <h2>Color Box Maker</h2>
      <FormContainer addBox = {addBox}/>
      <Boxes removeBox = {removeBox} boxes = {boxes}/>
    </div>
  );
}

export default App;
