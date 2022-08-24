import React, { useState } from 'react'
import {Formik} from 'formik'
import Inputs from './inputs/Inputs'
import Button from '../buttons/Button'
import ErrorAlertAuth from '../alerts/ErrorAlertAuth'
import { postReq } from '../../helpers/ReqToApi'
import {useDispatch} from 'react-redux'
import { login} from '../../app/slices/userAuth'
import './form.css'
import { useNavigate } from 'react-router-dom'

const FormLogin = () => {

    const [alert, setAlert] = useState({})
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogin = async (values) => {

        try {
            const {data} = await postReq('/auth/login', values)
            const {id, firstName, lastName, email, image, roleId } = data.subject
            
            localStorage.setItem('token', data.token)


            localStorage.setItem("dataUser002", JSON.stringify({id, firstName, lastName, email, image, roleId}))

            dispatch(login({
                id,
                firstName,
                lastName,
                email,
                image,
                roleId,
                loggedIn: true,
            }))

            window.location.href= "/" 
            
        } catch (error) {
            setAlert({
                msg: "El usuario o contraseña son incorrectos."
            })
            setTimeout(() =>{
                setAlert({})
            }, 5000)

            console.log(error)
        }
            
    }


  return (
            <>
                <Formik
                initialValues={{
                    email: '',
                    password: '',

                }}

                validate={({email, password}) => {
                    const errors = {}

                    if(!email) errors.email = 'Ingresa un email válido.'

                    if(!password){
                        errors.password = 'La contraseña debe tener al menos 6 caracteres.'

                    }
                    else if(password.length < 6){

                        errors.password = 'La contraseña debe tener al menos 6 caracteres.'
                    
                    }

                    return errors
                }}

                onSubmit={handleLogin}
                
                >

                    {({handleSubmit, handleChange, values, errors, touched, handleBlur}) => (

                        <form className="form" onSubmit={handleSubmit}>

                            <Inputs
                            error={errors.email}
                            touched={touched.email}
                            label="Email"
                            type="email" 
                            name='email'
                            onChange={handleChange}
                            value={values.email}
                            onBlur={handleBlur}
                            />


                            <Inputs
                                error={errors.password}
                                touched={touched.password}
                                label="Contraseña"
                                type="password" 
                                name='password'
                                onChange={handleChange}
                                value={values.password}
                                onBlur={handleBlur}
                                />

                            <Button className="button-primary" text='Iniciar sesión' type="submit"/>
                            <div>
                                {alert.msg && <ErrorAlertAuth error={alert.msg}/>}
                            </div>
                        </form>

                    )}

                </Formik>
                
                {/* add the register path when ready */}
                <div className="dont_have_account">
                    <p >¿No tienes una cuenta? <span onClick={()=>navigate('/registrate')}>Registrate</span></p>
                </div>

            </>
  )
}

export default FormLogin