import React from "react";
import { useState } from "react";

export default function About() {
  const [myStyle, setmyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const [btn, setBtn] = useState("Enable Light Mode");

  const handleUpDark = () => {
    console.log("Enable Dark Mode");
    if (myStyle.color === "white") {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtn("Enable Dark Mode");
    } else {
      setmyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtn("Enable Light Mode");
    }
  };

  return (
    <>
      <div className="container mb-5" style={myStyle}>
        <h2 className="py-2" style={{ marginTop: "8rem" }}>
          textUtils
        </h2>
        <div
          className="accordion accordion-flush"
          id="accordionFlushExample"
          style={myStyle}
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <h6>About textUtils</h6>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={myStyle}>
                <p>
                  A simple react starter web app that basically helps us to
                  customize/manipulate the text.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <h6>Features</h6>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={myStyle}>
                <p>
                  This app has got simple features which include capitalizing
                  your text or lower your text as well as inverse the text. You
                  can also see the total number of characters typed. And as an
                  extra i have added a enable dark mode feature to it.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary my-2"
          onClick={handleUpDark}
        >
          {btn}
        </button>
      </div>
    </>
  );
}
