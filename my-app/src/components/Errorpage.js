import React from "react";
import { useState } from "react";

export default function Errorpage({ btn, btn2, btn3 }) {
  const [age, setAge] = useState(1);

  const increaseAge = () => {
    setAge(age + 1);
  };

  const [magicText, setMagicText] = useState(true);

  const [text, setText] = useState([]);
  const [list, setList] = useState("");

  const handleChange = (event) => {
    setList(event.target.value);
  };

  const handleClick = () => {
    const newText = [...text, list];
    setText(newText);
  };

  const handleClear = (event) => {
    setList("");
  }

  const deleteBtn = (taskName)=> {
    const newText = text.filter((name) => {
      if(name ===taskName) {
        return false;
      }
      else{
        return true;
      }
    })
    setText(newText);
  }

  return (
    <>
      <div>Error!Page not found</div>
      <div className="showAge my-3">{age}</div>
      <button
        type="submit"
        onClick={increaseAge}
        className="btn btn-primary my-3"
      >
        {btn}
      </button>
      {magicText && <div className="magic my-3">Aniket Don</div>}
      <div>
        <button
          type="submit"
          onClick={() => {
            setMagicText(!magicText);
          }}
          className="btn btn-primary my-3"
        >
          {btn2}
        </button>
      </div>
      <div className="input-group w-50 my-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Anything"
          onChange={handleChange}
        />
        <button
          onClick={handleClick}
          className="btn btn-primary mx-2"
          type="submit"
        >
          {btn3}
        </button>
        <button
          onClick={handleClear}
          className="btn btn-primary mx-2"
          type="submit"
        >
          Clear
        </button>
      </div>
      <div className="container">
        {text.map((item) => {
          return (
            <div>
              <li key="uniqueId1">{item}</li>
              <button type="submit" className="btn btn-primary mb-3 my-3 mx-3" onClick={()=>{deleteBtn(item)}}>X</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
