import * as React from "react";
import { useState } from "react";
import './LimitedTextInput.css'

function LimitedTextInput({ characterLimit = 10 }) {
  const [inputValue, setInputValue] = useState("");
  const remainLength = characterLimit - inputValue.length;
  const isExceded = remainLength < 0;

  const handleChange = (e) => {
    setInputValue(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isExceded){
        alert("The input exceeds the character limit. Please shorten your text")
    }else{
        setInputValue("OK")
        alert("Thanks for your submission")
    }

    // if input length is too long
    // alert "The input exceeds the character limit. Please shorten your text."
    // else
    // alert "Thanks for your submission"
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="limited-text-input">Limited Text Input:</label>
        <span className={isExceded?"error":"no-error"}>Characters remaining: {remainLength}</span>
      </div>
      <input
        type="text"
        placeholder="Enter some text"
        id="limited-text-input"
        value={inputValue}
        onChange={handleChange}
      />

      <button type="submit" className="primary">
        Submit
      </button>
    </form>
  );
}

export default function App(){
    return <LimitedTextInput></LimitedTextInput>
}