import React from 'react'

import './LH_card.css'



function LH_Card(props) {
    return (
        <div className="lh-card">
            <img src={props.imgsrc} alt="full stack developer" className="image-left-card"/>
            <div className="card-content">
                <h6 className="text-danger " style={{margin:"1.3rem 1rem " ,fontWeight:"bolder", fontSize:"1.3rem" }}>{props.title}</h6>
                <h6 style={{marginBottom:"18px"}} ><span className="card-content-header" style={{fontWeight:"bolder"}}>Frontend :</span>{props.frontend}  </h6>
                <h6 style={{marginBottom:"18px"}} ><span className="card-content-header" style={{fontWeight:"bolder"}}>Backend :</span> {props.backend}</h6>
                <h6 style={{marginBottom:"18px"}} ><span className="card-content-header" style={{fontWeight:"bolder"}}>Database :</span>{props.database}</h6>
                <h6 style={{marginBottom:"18px"}} ><span className="card-content-header" style={{fontWeight:"bolder"}}>Frameworks :</span>{props.framework}</h6>
            </div>
           
            
        </div>
    )
}

export default LH_Card
