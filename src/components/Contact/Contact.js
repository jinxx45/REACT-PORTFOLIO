import React from 'react'
import './Contact.css'

import ContactCard from '../Cards/ContactCard/contactCard'

function Contact() {
    return (
        <div className="contact-section">
            <h1 className="text-center text-danger">Here , Have my Contact Card !</h1>
            <ContactCard/>
        </div>
    )
}

export default Contact
