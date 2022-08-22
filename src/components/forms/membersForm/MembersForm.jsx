import {React, useState} from 'react';
import { Form, Field, ErrorMessage, useFormik, FormikProvider} from 'formik';
import { MembersValidationSchema } from '../../../utils/validationSchemas';
import { postReq, patchReq } from '../../../helpers/ReqToApi';
import '../NewsForm/NewsForm.css'
import { useNavigate } from 'react-router-dom';

const MembersForm = (props) => {
    
    const navigate = useNavigate()
    const [ image, setImage ] = useState(null)

    var data = {
        name: '',
        role: '',
        content: '',
        type: 'POST',
    }

    if (props.members){
        data = {
            name: props.members.name,
            role: props.members.role,
            content: props.members.content,
            type: 'PATCH',
        }
    }

  

    console.log(props.members)
    const handleSubmit = async (values, {setSubmitting}) => {
        const data_im = new FormData();
        data_im.append('image', image);
        data_im.append('name', values.name);
        data_im.append('role', values.role);
        data_im.append('content', values.content);

        values.type === 'POST'
        ? postReq('/admin/members', data_im)
        : patchReq('/admin/members/' + props.members.id, data_im)
        setSubmitting(false)
        navigate('/backoffice/members')
        window.location.reload()
    }

  

    
    const formik = useFormik({enableReinitialize:true, initialValues: data, validationSchema: MembersValidationSchema, onSubmit: handleSubmit});
    
    return (
        <>
        <section className="newsFormContainer">
            <h1>{data.type === 'POST' ? 'Agregar nuevo miembro' : 'Actualizar un miembro'}</h1>
            <FormikProvider value={formik}>
                <Form className="news-form">
                    <Field placeholder='Nombre' name="name" className="news-field"/> 
                    <ErrorMessage name='name'>{msg => <span className="error">{msg}</span>}</ErrorMessage>
                    <Field placeholder='Rol' name="role" className="news-field"/> 
                    <ErrorMessage name='role'>{msg => <span className="error">{msg}</span>}</ErrorMessage>
                    <Field type="file" name="image" className="news-field" onChange={(e)=>setImage(e.target.files[0])} /> 
                    <ErrorMessage name='image'>{msg => <span className="error">{msg}</span>}</ErrorMessage> 
                    <Field as='textarea' name="content" className="news-field"/>
                    <ErrorMessage name='content'>{msg => <span className="error">{msg}</span>}</ErrorMessage>
                    <button type="submit" disabled={formik.isSubmitting} className="button-primary">Enviar</button>
                </Form>
            </FormikProvider>

        </section>
        </>
    )
}

export default MembersForm