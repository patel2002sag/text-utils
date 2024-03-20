import React from "react"; 
import { useState } from "react";
export default function Textform(props) {
    const [text, setText] = useState("");
    let handleUpperCase = () => {
      setText(text.toUpperCase());
      props.showAlert("Upper Case has been deployed!", "success");
    }
    let lowerCase = () => {
        setText(text.toLowerCase());
        props.showAlert("Lower Case has been deployed!", "success");
    }
  return (
    <>
      <form>
        <div className="form-group">
          <h3>{props.heading}</h3>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value = {text}
            onChange = {e => setText(e.target.value)}
            style = {{backgroundColor: props.mode === 'light' ? 'white' : 'grey', color:  props.mode === 'light' ? 'black' : 'white'}}
          ></textarea>
          <button type="button" className="btn btn-primary mx-1 my-3" onClick={() => {handleUpperCase();}}>Uppecase</button>
            <button type="button" className="btn btn-secondary mx-1 my-3" onClick = {lowerCase}>Lowercase</button>
            <button type="button" className="btn btn-success mx-1 my-3" onClick = {()=> {setText(""); props.showAlert("Clear has been deployed!", "success");}}>Clear</button>
        </div>
      </form>
      <div className = "container my-3">
            <h3>Your Text Summary</h3>
            <p>Total character: {text.length}</p>
            <p>Total Words: {text.split(" ").length - 1}</p>
            <p>Reading Time (seconds): {Math.round(text.split(" ").length) * 0.008} sec</p>
      </div>
    </>
  );
}
