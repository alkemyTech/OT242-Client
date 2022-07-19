// Dependencias
import React from "react";
import { useFormik } from 'formik';

// Estilos
import './UserInfo.css';

const UserInfo = () => {

  const formik = useFormik({
    initialValues: {
      name: 'Nombre',
      surname: 'Apellido',
      email: 'ejemplo@gmail.com',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  return (
    <form onSubmit={formik.handleSubmit} className="userInfoForm">
      <label htmlFor="name">Nombre:</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <br /><br />
      <label htmlFor="surname">Apellido:</label>
      <input
        id="surname"
        name="surname"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.surname}
      />
      <br /><br />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <br /><br />

      <button type="submit">Guardar cambios</button>
      <br /><br />
      <button type="submit">Eliminar cuenta</button>
    </form>
  );
};


export default UserInfo;