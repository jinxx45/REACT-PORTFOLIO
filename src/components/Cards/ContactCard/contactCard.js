import React from 'react'

import './contactCard.css'

import dp from '../../../Images/dp.jpg'

function contactCard() {
    return (
        <div className="d-flex justify-content-center">

            <div className="main d-flex my-1 ">

                <div className="left-bar p-4 d-flex justify-content-center align-items-center">
                    {/* Image */}
                    <img className="dp-image" src={dp} alt="" height={150} width={190} />
                </div>

                <div className="vertical-line">

                </div>

                <div className="right-bar p-4  contact-card d-flex flex-column justify-content-around">
                    {/* Details */}
                    <h3 style={{fontSize:"1.1rem"}} className="d-flex  font-weight-bold  text-danger"> Name :   <span className="text-muted font-weight-light"> S.Pragadeeshvaran</span> </h3>
                    <h3 style={{fontSize:"1.1rem"}} className="d-flex  font-weight-bold  text-danger"> Email :   <span className="text-muted font-weight-light"> www.pragat7@pec.edu</span> </h3>
                    <h3 style={{fontSize:"1.1rem"}} className="d-flex  font-weight-bold  text-danger"> Contact No :   <span className="text-muted font-weight-light"> 9384978015</span> </h3>
                </div>

            </div>
          

         
          

        </div>
    )
}

export default contactCard
