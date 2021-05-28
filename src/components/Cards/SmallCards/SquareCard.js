import React, { useState } from 'react'

import './SquareCard.css'
import ReactCardFlip from 'react-card-flip';

function SquareCard(props) {


    const [isFlipped , setisFlipped ] = useState(false);   

    const handleClick = () => {
        setisFlipped(!isFlipped)
    }

    return (         
        <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped} >
        <div className="square-card">
           <h2 className="text-center text-danger" style={{fontSize:"1.2rem" , fontWeight:"bolder",alignSelf:"center"}}>{props.title}</h2>
           <img className="square-image" src={props.imgsrc} alt="imagedev" />
          <button className="btn btn-outline-dark" onClick={handleClick}>Click to View </button>
        </div>

        <div className="square-card">
          <ul style={{display:"flex", flexDirection:"row",flexFlow:"wrap",listStyleType:"none",paddingInlineStart:"0px"}}>
              <li style={{paddingLeft:"22px",paddingBottom:"25px" ,paddingRight:"6px"}}><img src={props.lang1} alt="logo" height="50" width="50"/></li>
              <li style={{paddingLeft:"22px" ,paddingBottom:"25px" ,paddingRight:"6px"}} ><img src={props.lang2} alt="logo" height="50" width="50"/></li>
              <li style={{paddingLeft:"22px" ,paddingBottom:"25px" ,paddingRight:"6px"}} ><img src={props.lang3} alt="logo" height="50" width="50"/></li>
              
             
          </ul>
          <button className="btn btn-outline-dark"  onClick={handleClick}>Click to flip</button>
        </div>
      </ReactCardFlip>
    )
}

export default SquareCard
