import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const UserInfo = () => {
  const formik = useFormik({
    initialValues: {  // esto iria conectado con el store de redux
      firstName: 'Nombre',
      lastName: 'Apellido',
      email: 'ejemplo@gmail.com',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Debe ser de 15 caracteres o menos')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Debe ser de 20 caracteres o menos')
        .required('Required'),
      email: Yup.string().email('Email invalido').required('Required'),
    }),
    onSubmit: values => { // aca uso funcion axios para hacer put req, token y data=valus
      alert(JSON.stringify(values, null, 2));
    },
  });



  // manejo de borrado de cuenta
  const eraseAccountHandler = () => {
    console.log("cuenta borrada");  // aca uso funcion axios para mandar delete req, token
  };


  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">Nombre: </label>
      <input
        id="firstName"
        type="text"
        {...formik.getFieldProps('firstName')}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}
      <br /><br />
      <label htmlFor="lastName">Apellido: </label>
      <input id="lastName" type="text" {...formik.getFieldProps('lastName')} />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}
      <br /><br />
      <label htmlFor="email">Email: </label>
      <input id="email" type="email" {...formik.getFieldProps('email')} />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <br /><br />
      <button type="submit">Guardar cambios</button>
      <br /><br />
      <button type="button" onClick={eraseAccountHandler}>Eliminar cuenta</button>
    </form>
  );
};

export default UserInfo;
