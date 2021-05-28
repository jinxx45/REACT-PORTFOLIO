import React from 'react'
import Typed from 'react-typed'

import './Home.css'

function Home() {
    return (
        
        <div>
            <section id="Home" className="Home">
            <div className="header-image">
                <div className="row">
                    <div className="col-lg-3">
                            
                    </div>
                    <div className="col-lg-9">
                        <div className="header-content">
                            <h2 style={{fontSize:"3rem"}}>  Hi, I am Pragadeeshvaran </h2>
                            <Typed 
                            className="changing-text" 
                            strings={["Web Development","Full Stack Development","UI Design","App Development","Python","ReactJS","NodeJS"]}
                            typeSpeed={45}
                            backSpeed={60}
                            loop
                          
                            />
                            <button style={{marginTop:"2.4rem" , fontWeight:"bolder"}} type="button" class="btn btn-dark">View My Projects</button>
                        </div>
                    </div>
                </div>
           
              
            
            </div>
             </section>
            
            
        </div>
    )
}

export default Home
