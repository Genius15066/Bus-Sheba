import { React } from 'react'
import ContactForm from '../../forms/ContactForm'

function Contact() {
  return (
    <div>
      <div className="form_head">
        <h1>Contact US</h1>
        <p>Thank you for reaching us! We are always happy to hear from you</p>
      </div>
      <ContactForm />
    </div>
  )
}

export default Contact
