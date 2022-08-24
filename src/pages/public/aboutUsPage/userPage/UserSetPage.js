import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Form, Field, ErrorMessage, useFormik, FormikProvider} from 'formik';
import { useNavigate } from 'react-router-dom';
import { getReq, putReq } from '../../../../helpers/ReqToApi';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { logout } from '../../../../app/slices/userAuth'


const UserSetPage = () => {
    const [ user, setUsers] = useState({});
    const {id} = useParams();
    const [ image, setImage ] = useState(null)
    const dispatch = useDispatch()

    const getData = async () => {
        const {data} = await getReq(`/users/${id}`);
        setUsers(data);
    };

    useEffect(() => {
        getData();
    }, [])



    const navigate = useNavigate()

    const user_data = {
        firstName: user.firstName,
        lastName: user.lastName,
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
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
    }
    
    const handleSubmit = async (values, {setSubmitting}) => {
        const data_im = new FormData();
        data_im.append('image', image);
        data_im.append('firstName', values.firstName);
        data_im.append('lastName', values.lastName);
        notLoggedAlert();
        putReq('/users/' + user.id, data_im)
        setSubmitting(false)

    }
    
    const formik = useFormik({enableReinitialize:true, initialValues: user_data, onSubmit: handleSubmit});



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

export default UserSetPage