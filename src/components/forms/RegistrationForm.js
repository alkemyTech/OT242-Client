import React, { useState } from 'react';
import {Formik, Form} from 'formik';
import Inputs from './inputs/Inputs'
import * as Yup from 'yup';
import ErrorAlertAuth from '../alerts/ErrorAlertAuth'
import { postReq } from '../../helpers/ReqToApi'
import { useNavigate } from 'react-router-dom';

function RegistrationForm(props) {

  const [alert, setAlert] = useState({})
  
  const navigate = useNavigate();

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

    const signUp = async (values) => {

      try {
      console.log(values)
      const {data} = await postReq('/auth/register', values)
      await postReq('/auth/login', values)
      console.log(data)
      
      const {id, firstName, lastName, email, image, roleId } = data.subject
      
      localStorage.setItem('token', data.token)


      localStorage.setItem("dataUser002", JSON.stringify({id, firstName, lastName, email, image, roleId}))

      navigate('/');
      window.location.reload();

    } catch (error) {
        error.response.data.errors.map(err => {
          return(
          setAlert({
            msg: err.msg
          }))
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
            onSubmit={signUp}
        >
        {({values, errors, touched, handleChange}) => {
        return (<Form className='form'>
            <Inputs
              control='input'
              type='text'
              onChange={handleChange}
              label='Nombre:'
              name='firstName'
              value={values.firstName}
            />
            <Inputs
              control='input'
              type='text'
              onChange={handleChange}
              label='Apellido:'
              name='lastName'
              value={values.lastName}
            />
            <Inputs
              control='input'
              type='email'
              onChange={handleChange}
              label='Email:'
              name='email'
              place_holder='Email'
              value={values.email}
            />
            <Inputs
              control='input'
              type='password'
              onChange={handleChange}
              label='Contraseña:'
              name='password'
              place_holder='Contraseña'
              value={values.password}
            />
            <Inputs
              control='input'
              type='password'
              onChange={handleChange}
              label='Confirmar contraseña:'
              name='confirmPassword'
              place_holder='Repetir contraseña'
            />
            <button type='submit' onClick={signUp} className="button-primary">
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