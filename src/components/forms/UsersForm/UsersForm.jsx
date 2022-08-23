import React, { useEffect, useState } from 'react';
import { Form, Field, ErrorMessage, useFormik, FormikProvider} from 'formik';
import { putReq, getReq } from '../../../helpers/ReqToApi';
import '../NewsForm/NewsForm.css'
import { useNavigate } from 'react-router-dom';

const UsersForm = (props) => {
    const [ roles, setRoles] = useState([]);

    const getRolesList = async () => {
        const {data} = await getReq('/admin/roles');
        setRoles(data);
    };

    useEffect(() => {
        getRolesList();
    }, [])

    console.log(roles)
    
    const navigate = useNavigate()

    const data = {
        firstName: props.users.firstName,
        lastName: props.users.lastName,
        email: props.users.email
    }
    
    const handleSubmit = async (values, {setSubmitting}) => {
        putReq('/users/' + props.users.id, {firstName: values.firstName, lastName: values.lastName, email: values.email, roleId: values.roleId})
        setSubmitting(false)
        navigate('/backoffice/users')
        window.location.reload()
    }
    
    const formik = useFormik({enableReinitialize:true, initialValues: data, onSubmit: handleSubmit});
    
    return (
        <>
        <section className="newsFormContainer">
            <h1>Actualizar un Usuario</h1>
            <FormikProvider value={formik}>
                <Form className="news-form">
                    <Field placeholder='Nombre' name="firstName" className="news-field"/> 
                    <ErrorMessage name='firstName'>{msg => <span className="error">{msg}</span>}</ErrorMessage>

                    <Field placeholder='Apellidos' name="lastName" className="news-field"/> 
                    <ErrorMessage name='lastName'>{msg => <span className="error">{msg}</span>}</ErrorMessage>

                    <Field type="email" placeholder='Email' name="email" className="news-field"/> 
                    <ErrorMessage name='email'>{msg => <span className="error">{msg}</span>}</ErrorMessage>

                    <Field as="select" placeholder='Rol' name="roleId" className="news-field">
                        {roles.map(role => (
                            <option value={role.id}>{role.id} - {role.name} {" (" + role.description + ")"}</option>
                        ))}
                    </Field> 
                    <ErrorMessage name='roleId'>{msg => <span className="error">{msg}</span>}</ErrorMessage>
                    
                    <button type="submit" disabled={formik.isSubmitting} className="button-primary">Enviar</button>
                    
                </Form>
            </FormikProvider>
        </section>
        </>
    )
}

export default UsersForm