import React from 'react'
import { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("Enter any text here");//making a state.

    const handleUpUpper = () => {
        // console.log("this button was clicked." + text);
        let newText = text.toUpperCase();
        setText(newText)//correct way to update a state.
        props.btnMsg("UpperCase Button was clicked", "success")
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleUpClear = () => {
        // console.log("Clear on click");
        setText("");
    }

    const handleUpLower = () => {
        let textLower = text.toLowerCase();
        setText(textLower);
    }

    const handleUpInverse = () => {
        // console.log("Inverse the text");
        let textReverse = text.split(" ").reverse().join(" ");
        setText(textReverse);

    }
    return (
        <>
            <div className="container" style={{ color: props.btnMode === 'light' ? 'black' : 'white' }}>
                <div className="mb-3 my-4">
                    <h1>Enter the text below to analyze</h1>
                    <textarea className="form-control" style={{ backgroundColor: props.btnMode === 'light' ? 'white' : 'grey', color: props.btnMode === 'light' ? 'grey' : 'white' }} id="exampleFormControlTextarea1" onChange={handleOnChange} value={text} rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-primary" onClick={handleUpUpper}>To UpperCase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleUpLower}>To LowerCase</button>
                <button type="button" className="btn btn-primary" onClick={handleUpInverse}>To Inverse</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleUpClear}>Clear</button>
            </div>
            <div className="container my-4" style={{ color: props.btnMode === 'light' ? 'black' : 'white' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} word and {text.length} characters.</p>
            </div>
        </>
    )   
}
