import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

function RegistrationForm(props) {
    const initialValues = {
        name: '',
        surname:'',
        email: '',
        password: '',
        confirmPassword: ''
    }
    const validationSchema = Yup.object({
        name: Yup.string()
        .required('Required'),

        surname: Yup.string()
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

    const onSubmit = values => {
        console.log('Form data', values)
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
              name='name'
            />
            <FormikControl
              control='input'
              type='text'
              label='Apellido:'
              name='surname'
            />
            <FormikControl
              control='input'
              type='email'
              label='Email:'
              name='email'
            />
            <FormikControl
              control='input'
              type='password'
              label='Contraseña:'
              name='password'
            />
            <FormikControl
              control='input'
              type='password'
              label='Confirmar contraseña:'
              name='confirmPassword'
            />
            <button type='submit' disabled={!formik.isValid} className='submit_btn'>
              Submit
            </button>
        </Form>
        )
      }}
    </Formik>
    );
}

export default RegistrationForm;