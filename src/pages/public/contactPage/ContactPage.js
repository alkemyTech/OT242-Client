import React from 'react';
import AnimatedPage from '../../../components/AnimatedPage';
import ContactForm from '../../../components/forms/Contact_form';
import './ContactPage.css'

const ContactPage = (props) => {




  return (
    <AnimatedPage>
          
    <main className="main_contact">
      <div className="text_contact">
        <h2>Texto aleatorio</h2>

        
      </div>
        
      <ContactForm />


      </main>
    </AnimatedPage>
  );
};

export default ContactPage;
