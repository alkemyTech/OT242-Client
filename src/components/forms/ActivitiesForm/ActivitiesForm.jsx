import React, { useEffect, useState } from 'react';
import { Form, Field, ErrorMessage, useFormik, FormikProvider} from 'formik';
import { ActivitiesSchema } from '../../../utils/validationSchemas';
import { postReq, patchReq } from '../../../helpers/ReqToApi';
import '../NewsForm/NewsForm.css'
import { useNavigate } from 'react-router-dom';

const ActivitiesForm = (props) => {
    
    const navigate = useNavigate()

    var data = {
        name: '',
        content: '',
        type: 'POST',
    }

    if (props.activities){
        data = {
            name: props.activities.name,
            content: props.activities.content,
            type: 'PATCH',
        }
    }
    console.log(props.activities)
    const handleSubmit = async (values, {setSubmitting}) => {
        values.type === 'POST'
        ? postReq('/admin/activities', {name: values.name, image: values.image, content: values.content})
        : patchReq('/admin/activities/' + props.activities.id, {name: values.name, image: values.image, content: values.content})
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
                    <Field type="file" name="image" className="news-field"/> 
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