import React from 'react';
import RegistrationForm from '../../Components/formik/RegistrationForm';
import './CSSRegistration.css';

function Registration(
){
    return(
    <div >
        <div className="Half_div">
            <p>Bienvenido</p>
            <h1>Crea tu cuenta</h1>
            <RegistrationForm />
        </div>
        <div className="Half_div"><img className='Main_img' 
            src="https://www.transandloc.com/wp-content/uploads/traduccion_voluntaria_solidaridad_ONG.jpg"
            alt="Piled_hands_img" /></div>
    </div>
    
    );
}
export default Registration;