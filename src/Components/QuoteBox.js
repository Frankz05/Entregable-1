import React from "react";
import quotes from "../quotes.json"
import { useState } from "react";

const QuoteBox = () => {
    const[quote, setQuote] = useState(quotes[getRandom()])
    const color = colors[Math.floor(Math.random()* colors.length)]
    document.body.style = `background:${color}`
    const changeQuote =()=>{
        setQuote(quotes[getRandom()])
    }

    return ( 
        <div className="quoteCard" style={{color:color}}>
            
            <div className="quote">
                <p className="quoteLeft">
                    <i class="fa-solid fa-quote-left"></i> 
                    
                </p>
                {quotes[getRandom()].quote}    
            </div> 
            <div>
                <p className="author">{quotes[getRandom()].author} </p>
            </div>
            <div className="flexButton">
                <button onClick={changeQuote} style={{background:color}}>
                    <i class="fa-solid fa-angle-right"></i>
                </button>
            </div>
            
        </div>
     );
}
const getRandom = () => Math.floor(Math.random() * quotes.length)

const colors = ["#845EC2","#D65DB1", "#ff6f91", "#ff9671", "#ffc75f", "#ff0000", "#000000", "#0000ff"]
 
export default QuoteBox;