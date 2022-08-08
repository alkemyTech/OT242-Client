import React from 'react'
<<<<<<< HEAD:src/UI/login/LoginPage.js
import FormLogin from '../../components/forms/FormLogin'
import './login.css'
=======
import FormLogin from '../../../components/forms/FormLogin'
import './LoginPage.css'
>>>>>>> main:src/pages/public/loginPage/LoginPage.js


const Login = () => {
  return (

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

  )
}

export default Login