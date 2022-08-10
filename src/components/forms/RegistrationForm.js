import React, { useState } from 'react';
import {Formik, Form} from 'formik';
import Inputs from './inputs/Inputs'
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import ErrorAlertAuth from '../alerts/ErrorAlertAuth'
import { postReq } from '../../helpers/ReqToApi'
import './form.css'

function RegistrationForm(props) {

  const [alert, setAlert] = useState({})

    const initialValues = {
        firstName: '',
        lastName:'',
        email: '',
        password: '',
        confirmPassword: ''
    }
    const validationSchema = Yup.object({
        firstName: Yup.string()
        .required('Required'),

        lastName: Yup.string()
        .required('Required'),

        email: Yup.string()
        .email('Invalid email format')
        .required('Required'),

        password: Yup.string().required('Required')
        .min(6, 'Must have at least 6 characters'),
        
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), ''], 'Passwords must match')
        .required('Required'),
    })

    const onSubmit = async values => {

      try {

      const {data} = await postReq('/auth/register', values)
      
    } catch (error) {
        error.response.data.errors.map(err => {
          
          setAlert({
            msg: err.msg
          })
        })
        
      setTimeout(() =>{
          setAlert({})
      }, 5000)
    }

    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
        {formik => {
        return (<Form className='form'>
            <Inputs
              control='input'
              type='text'
              label='Nombre:'
              name='firstName'
            />
            <Inputs
              control='input'
              type='text'
              label='Apellido:'
              name='lastName'
            />
            <Inputs
              control='input'
              type='email'
              label='Email:'
              name='email'
              place_holder='Email'
            />
            <Inputs
              control='input'
              type='password'
              label='Contraseña:'
              name='password'
              place_holder='Contraseña'
            />
            <Inputs
              control='input'
              type='password'
              label='Confirmar contraseña:'
              name='confirmPassword'
              place_holder='Repetir contraseña'
            />
            <button type='submit' disabled={!formik.isValid} className="button-primary">
              Registrate
            </button>

            <div>
                {alert.msg && <ErrorAlertAuth error={alert.msg}/>}
            </div>
        </Form>
        )
      }}
    </Formik>
    );
}

export default RegistrationForm;