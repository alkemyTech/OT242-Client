import React, {  useState } from 'react';
import { Form, Field, ErrorMessage, useFormik, FormikProvider} from 'formik';

import '../forms/NewsForm/NewsForm.css'
import { useNavigate} from 'react-router-dom';
import { putReq } from '../../helpers/ReqToApi';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { logout } from '../../app/slices/userAuth'

const UserSet = (props) => {

    const [ image, setImage ] = useState(null)
    const dispatch = useDispatch()

    console.log(props.users)

    const navigate = useNavigate()

    const data = {
        firstName: props.users.firstName,
        lastName: props.users.lastName,
    }

    const notLoggedAlert = ()=>{
        Swal.fire({
          title: '¡Para guardar los cambios deberas iniciar sesion nuevamente!',
          showCancelButton: true,
          cancelButtonText: 'Más tarde',
          confirmButtonText: 'Reiniciar Sesión',
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(logout())
            navigate('/login')
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        })
      }
    
    const handleSubmit = async (values, {setSubmitting}) => {
        const data_im = new FormData();
        data_im.append('image', image);
        data_im.append('firstName', values.firstName);
        data_im.append('lastName', props.users.lastName);
        notLoggedAlert();
        putReq('/users/' + props.users.id, data_im)
        setSubmitting(false)


    }
    
    const formik = useFormik({enableReinitialize:true, initialValues: data, onSubmit: handleSubmit});
    
    return (
        <>
        <section className="newsFormContainer">
            <h1>Actualizar datos de Usuario</h1>
            <FormikProvider value={formik}>
                <Form className="news-form">
                    <Field placeholder='Nombre' name="firstName" className="news-field"/> 
                    <ErrorMessage name='firstName'>{msg => <span className="error">{msg}</span>}</ErrorMessage>

                    <Field placeholder='Apellidos' name="lastName" className="news-field"/> 
                    <ErrorMessage name='lastName'>{msg => <span className="error">{msg}</span>}</ErrorMessage>

                    <Field type="file" name="image" className="news-field" onChange={(e)=>setImage(e.target.files[0])} /> 
                    <ErrorMessage name='image'>{msg => <span className="error">{msg}</span>}</ErrorMessage>

                  
                    <button type="submit" disabled={formik.isSubmitting} className="button-primary">Enviar</button>
                    
                </Form>
            </FormikProvider>
        </section>
        </>
    )
}

export default UserSet