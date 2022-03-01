// import React from "react";
// import { useState } from "react";
 import quotes from "../quotes.json"
 import colors from "./QuoteBox"
 import App from "../App"

const QuoteButton = (quote, setQuote) => {
    const color = colors[Math.floor(Math.random()* colors.length)]
    const changeQuote =()=>{
        setQuote(quotes[getRandom()])
    }
    return ( 
        <div className="flexButton">
            <button onClick={changeQuote} style={{background:color}}> <i class="fa-solid fa-angle-right"></i> </button>
        </div>
     );
}
const getRandom = () => Math.floor(Math.random() * quotes.length)
export default QuoteButton;