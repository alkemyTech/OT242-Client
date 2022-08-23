import React from 'react';
import ContactForm from '../../../components/forms/contactForm/ContactForm';
import './ContactPage.css'
import AnimatedPage from '../../../components/AnimatedPage';
import {MdLocationPin, MdPhone, MdMail } from 'react-icons/md'

const ContactPage = () => {

  return (
    <AnimatedPage>
      <section className="contactPage">
        <div className='form_container'>
        <ContactForm />
        </div>
        <div className='contact_details'>
          <p><MdLocationPin className="icon"/> Av. Andres Rolón 1535 - V° La Cava - Buenos Aires</p>
          <p><MdPhone className="icon"/>1160112988</p>
          <p><MdMail className="icon"/>somosfundacionmas@gmail.com</p>
          <img src='./images/location.png' alt='Locationmap' className='location_map'/>
        </div>

      </section>
    </AnimatedPage>
  );
};

export default ContactPage;
