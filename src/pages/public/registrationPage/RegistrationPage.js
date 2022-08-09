import React from 'react';
import AnimatedPage from '../../../components/AnimatedPage';
import RegistrationForm from '../../../components/forms/RegistrationForm';
import './RegistrationPage.css';

function Registration(
){
    return(
    <AnimatedPage>
        <div className='general'>
            <div className="Half_div">
                <p>Bienvenido</p>
                <h1>Crea tu cuenta</h1>
                <RegistrationForm />
            </div>
            <div className="Half_div"><img className='Main_img' 
                src="https://www.transandloc.com/wp-content/uploads/traduccion_voluntaria_solidaridad_ONG.jpg"
                alt="Piled_hands_img" /></div>
        </div>
    </AnimatedPage>
    );
}
export default Registration;