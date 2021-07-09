import React from 'react'
import './Contact.css'

import ContactCard from '../Cards/ContactCard/contactCard'

function Contact() {
    return (
        <section id = "contact">
        <div className="contact-section ">
            <h1 style={{fontSize:"1.9rem"}} className="text-center text-danger font-weight-bold py-5">Here , Have my Contact Card !</h1>
            <ContactCard />
        </div>
        </section>
     
    )
}

export default Contact
