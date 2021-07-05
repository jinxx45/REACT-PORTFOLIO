import React from 'react'

import './contactCard.css'

import dp from '../../../Images/dp.jpg'

function contactCard() {
    return (
        <div className="d-flex justify-content-center">

            <div className="main d-flex ">

                <div className="left-bar p-4 my-2">
                    {/* Image */}
                    <img className="dp-image" src={dp} alt="" height={130} width={130} />
                </div>

                <div className="vertical-line">

                </div>

                <div className="right-bar p-4">
                    {/* Details */}
                    <h3 className="fs-3 mx-2  my-1">Pragadeeshvaran S</h3>
                    <h3 className="fs-3 mx-2  my-3">www.pragat7@pec.edu</h3>
                    <h3 className="fs-3 mx-2  my-3">9384978015</h3>
                </div>

            </div>
          

         
          

        </div>
    )
}

export default contactCard
