import React from 'react';
import RegistrationForm from '../components/RegistrationForm';
import '../UI/CSSRegistration.css';

function Registration(
){
    return(
    <div >
        <div className="Half_div">
            <p>Bienvenido</p>
            <h1>Crea tu cuenta</h1>
            <RegistrationForm />
        </div>
        <div className="Half_div"><img className='Main_img' src={require('../Resources/Piled_hands_img.jpg')} alt="Piled_hands_img" /></div>
    </div>
    
    );
}
export default Registration;