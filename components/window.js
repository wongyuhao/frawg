import React, { useEffect } from "react";
import "98.css"
const Window = ({title, content, quotes}) => {
  
    const randAlert = () => {
      if (quotes) {
        alert(quotes[Math.floor(Math.random()*quotes.length)].text)
      } else {
        alert("hi.")
      }
    }
    return (
    <div className='w-full window m-4 max-w-md'>
        <div className='title-bar'>
          <div className='title-bar-text'>
            {title}
          </div>
          <div className='title-bar-controls'>
            <button aria-label="Minimize"  onClick={()=> randAlert()}/>
            <button aria-label="Maximize" onClick={()=> randAlert()}/>
            <button aria-label="Close" onClick={()=> randAlert()}/>
          </div>
        </div>

        <div className="window-body">
            {content}
        </div>
      
      


    </div>
    )
}

export default Window;

