import React from 'react'
import {Formik} from 'formik'
import Inputs from '../inputs/Inputs'
import Button from '../buttons/Button'
import './form.css'

const FormLogin = () => {
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

                    }else if(password.length < 6){

                        errors.password = 'La contraseña debe tener al menos 6 caracteres.'
                    
                    }



                    return errors
                }}

                onSubmit={async (values) => {

                    console.log('Form data', values)

                }}
                
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
                            
                        </form>

                    )}

                </Formik>
            
                <div className="dont_have_account">
                    <p >¿No tienes una cuenta? <span>Registrate</span></p>
                </div>
            </>
  )
}

export default FormLogin