import React, { useEffect, useState } from 'react';
import { Form, Field, ErrorMessage, useFormik, FormikProvider} from 'formik';
import { ActivitiesSchema } from '../../../utils/validationSchemas';
import { postReq, patchReq } from '../../../helpers/ReqToApi';
import '../NewsForm/NewsForm.css'
import { useNavigate } from 'react-router-dom';

const ActivitiesForm = (props) => {
    
    const navigate = useNavigate()
    const [ image, setImage ] = useState(null)

    var data = {
        name: '',
        content: '',
        type: 'POST',
    }
    console.log(props.activities)

    if (props.activities){
        data = {
            name: props.activities.name,
            content: props.activities.content,
            type: 'PATCH',
        }
    }

    const handleSubmit = async (values, {setSubmitting}) => {
        const data_im = new FormData();
        data_im.append('image', image);
        data_im.append('name', values.name);
        data_im.append('content', values.content);
        values.type === 'POST'
        ? postReq('/admin/activities', data_im)
        : patchReq('/admin/activities/' + props.activities.id, data_im)
        setSubmitting(false)
        navigate('/backoffice/activities')
        window.location.reload()
    }
    
    const formik = useFormik({enableReinitialize:true, initialValues: data, validationSchema: ActivitiesSchema, onSubmit: handleSubmit});
    
    return (
        <>
        <section className="newsFormContainer">
            <h1>{data.type === 'POST' ? 'Crear una actividad' : 'Actualizar una actividad'}</h1>
            <FormikProvider value={formik}>
                <Form className="news-form">
                    <Field placeholder='Título' name="name" className="news-field"/> 
                    <ErrorMessage name='name'>{msg => <span className="error">{msg}</span>}</ErrorMessage>
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

export default ActivitiesForm