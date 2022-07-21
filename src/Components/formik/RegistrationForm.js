import React, { useState } from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import ErrorAlertAuth from '../../components/alerts/ErrorAlertAuth'
import { postReq } from '../../helpers/ReqToApi'

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

      // === this function has to be replaced later, it is only for testing
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
        return (<Form className='RegistrationForm'>
            <FormikControl
              control='input'
              type='text'
              label='Nombre:'
              name='firstName'
            />
            <FormikControl
              control='input'
              type='text'
              label='Apellido:'
              name='lastName'
            />
            <FormikControl
              control='input'
              type='email'
              label='Email:'
              name='email'
              place_holder='Email'
            />
            <FormikControl
              control='input'
              type='password'
              label='Contraseña:'
              name='password'
              place_holder='Contraseña'
            />
            <FormikControl
              control='input'
              type='password'
              label='Confirmar contraseña:'
              name='confirmPassword'
              place_holder='Repetir contraseña'
            />
            <button type='submit' disabled={!formik.isValid} className='submit_btn'>
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