import React, { useState } from "react";

export default function TextForm(prop) {
  const [text, setText] = useState("");
  
const handleUpClick = () => {
    setText(text.toUpperCase());
  console.log("convert to uppercase button clicked");
};
const handleLoClick = () => {
    setText(text.toLowerCase());
  console.log("convert to Lowercase button clicked");
};
const handleReverse = () => {
    setText(text.split("").reverse().join(""));
  console.log("convert to Lowercase button clicked");
};
const handleCopy = () => {
  navigator.clipboard.writeText(text);
};

const handleClear = () => {
    setText("");
  console.log("convert to Lowercase button clicked");
};

const handleOnChange = (event) => {
    console.log("change");
    setText(event.target.value);
};

  return (
    <>
    <div>
      <div className="mb-3">
        <h1>{prop.heading}</h1>
        <textarea
          className="form-control"
          id="textArea"
          value={text}
          onChange={handleOnChange}
          rows="8"
        ></textarea>
      </div>
      <button
        type="submit"
        className="btn btn-primary mb-3 mx-3"
        onClick={handleUpClick}
      >
        Convert to Uppercase
      </button>
      <button
        type="submit"
        className="btn btn-primary mb-3 mx-3"
        onClick={handleLoClick}
      >
        Convert to Lowercase
      </button>
      <button
        type="submit"
        className="btn btn-primary mb-3 mx-3"
        onClick={handleReverse}
      >
        Reverse
      </button>
      <button
        type="submit"
        className="btn btn-primary mb-3 mx-3"
        onClick={handleCopy}
      >
        CopyText
      </button>
      <button
        type="submit"
        className="btn btn-primary mb-3 mx-3"
        onClick={handleClear}
      >
        Clear Text 
      </button>
    </div>
    <div className="container">
        <h2>Your Text Summary :</h2>
        <p>Total number of charaters : {text.trim().length}</p>
        <p>Total number of words : {text.trim().split(" ").length}</p>
        <p>Total time required to read the containt (assuming the time to read 125 words is 0.08s) : {0.08*text.trim().split(" ").length}s</p>
    </div>
    <div className="container"> 
        <h2>Preview:</h2>
        <p>{text}</p>
    </div>
  </>);
}
