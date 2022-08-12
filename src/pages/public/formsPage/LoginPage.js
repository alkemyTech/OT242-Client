import React from 'react'
import AnimatedPage from '../../../components/AnimatedPage'
import FormLogin from '../../../components/forms/FormLogin'
import './FormPage.css'


const Login = () => {
  return (
    <AnimatedPage>
        <div className="container_login">
            <div className="form_login_container">
                <div className="text_login">
                    <p>Bienvenido</p>
                    <h1>¡Inicia Sesión en tu cuenta!</h1>
                </div>

                <FormLogin/>
            </div>

            <img src='https://www.transandloc.com/wp-content/uploads/traduccion_voluntaria_solidaridad_ONG.jpg' className='img-responsive' />
        </div>
    </AnimatedPage>
  )
}

export default Login