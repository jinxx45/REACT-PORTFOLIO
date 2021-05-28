import React from 'react'

import './Skills.css'

import LeftCard from  '../Cards/Long Horizontal Cards/LH_Card'
import SquareCard from '../Cards/SmallCards/SquareCard'

import fullstack from '../../Images/fullstack-dev.png'
import appdev from '../../Images/mobileapp.jpg'
import  progLangImg from '../../Images/coding.jpg'
import frameworkImg from '../../Images/framewoks.jpg'
import designImg from '../../Images/designtools.jpg'
import databaseImg from '../../Images/database.jpg'

import cLogo from '../../Images/c-logo.png'
import cplusLogo from '../../Images/c++logo.png'
import pythonLogo from '../../Images/pythonlogo.png'
import reactLogo from '../../Images/react-logo.png'
import bootstrapLogo from '../../Images/bootstrap-logo.svg'
import materialUILogo from '../../Images/material-ui-logo.png'
import mysqlLogo from '../../Images/mysql logo.png'
import mariaDBLogo from '../../Images/mariadb-logo.png'
import mongoDbLogo from '../../Images/mongodb.png'
import PsLogo from '../../Images/ps-logo.png'
import AiLogo from '../../Images/illustrator logo.png'
import figmaLogo from '../../Images/figma-1-logo.png'

function Skills() {
    return (
        <div >
            <section id = "skills" className="skills">
                <div className="row">
                    <div className="col-lg-6  left-bar-skills">
                        
                        <LeftCard
                         title = "Full Stack Development"
                         frontend ="React JS , HTML , CSS"  
                         backend = " Node JS , PHP" 
                         framework = "Bootstrap ,Express"
                         database ="MySQL , MongoDB"
                         imgsrc = {fullstack}
                        />
                        <LeftCard
                        title = "App Development"
                        frontend ="React Native"  
                        backend = " Node JS" 
                        framework = "Material UI"
                        database ="MongoDB"
                        imgsrc = {appdev}
                        />

                    </div>
                    <div className="col-lg-6 right-bar-skills">
                      <SquareCard 
                      title = "Programming Languages"
                      imgsrc={progLangImg}
                      lang1={cLogo}
                      lang2={cplusLogo}
                      lang3={pythonLogo}
                      />
                      <SquareCard
                      title ="Frameworks"
                      imgsrc={frameworkImg}
                      lang1={reactLogo}
                      lang2={bootstrapLogo}
                      lang3={materialUILogo}
                      />
                      <SquareCard
                      title="Database"
                      imgsrc={databaseImg}
                      lang1={mysqlLogo}
                      lang2={mariaDBLogo}
                      lang3={mongoDbLogo}
                      />
                      <SquareCard
                      title="Design Tools"
                      imgsrc={designImg}
                      lang1={figmaLogo}
                      lang2={AiLogo}
                      lang3={PsLogo}
                      />
                        

                       
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills
