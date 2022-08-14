import React from 'react';
import ContactForm from '../../../components/forms/contactForm/ContactForm';
import './ContactPage.css'
import AnimatedPage from '../../../components/AnimatedPage';

const ContactPage = () => {

  return (
    <AnimatedPage>
      <section className="contactPage">
                  
        <ContactForm />

      </section>
    </AnimatedPage>
  );
};

export default ContactPage;
