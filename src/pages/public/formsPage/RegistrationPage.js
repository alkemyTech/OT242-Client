import React from 'react';
import RegistrationForm from '../../../components/forms/RegistrationForm';
import './FormPage.css';

function Registration(
){
    return(
    <div className="container_login">
        <div className="form_login_container">
            <div className="text_login">
                <p>Bienvenido</p>
                <h1>Crea tu cuenta</h1>
            </div>
            
            <RegistrationForm />
        </div>
        <img src="https://www.transandloc.com/wp-content/uploads/traduccion_voluntaria_solidaridad_ONG.jpg" className='img-responsive'/>
    </div>
    
    );
}
export default Registration;