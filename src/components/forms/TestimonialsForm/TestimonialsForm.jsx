import React, { useEffect, useState } from 'react';
import { Form, Field, ErrorMessage, useFormik, FormikProvider} from 'formik';
import { TestimonialsValidationSchema } from '../../../utils/validationSchemas';
import { postReq, putReq } from '../../../helpers/ReqToApi';
import '../NewsForm/NewsForm.css'
import { useNavigate } from 'react-router-dom';

const TestimonialsForm = (props) => {
    
    const navigate = useNavigate()

    var data = {
        name: '',
        content: '',
        type: 'POST',
    }

    if (props.testimonials){
        data = {
            name: props.testimonials.name,
            content: props.testimonials.content,
            type: 'PUT',
        }
    }
    const handleSubmit = async (values, {setSubmitting}) => {
        values.type === 'POST'
        ? postReq('/testimonials', {name: values.name, image: values.image, content: values.content})
        : putReq('/testimonials/' + props.testimonials.id, {name: values.name, image: values.image, content: values.content})
        setSubmitting(false)
        navigate('/backoffice/testimonials')
        window.location.reload()
    }
    
    const formik = useFormik({enableReinitialize:true, initialValues: data, validationSchema: TestimonialsValidationSchema, onSubmit: handleSubmit});
    
    return (
        <>
        <section className="newsFormContainer">
            <h1>{data.type === 'POST' ? 'Agregar un testimonio' : 'Actualizar un testimonio'}</h1>
            <FormikProvider value={formik}>
                <Form className="news-form">
                    <Field placeholder='Nombre' name="name" className="news-field"/> 
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

export default TestimonialsForm