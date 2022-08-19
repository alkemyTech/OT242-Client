import React, { useEffect, useState } from 'react';
import { Form, Field, ErrorMessage, useFormik, FormikProvider} from 'formik';
import { CategoriesValidationSchema } from '../../../utils/validationSchemas';
import { postReq, putReq } from '../../../helpers/ReqToApi';
import '../NewsForm/NewsForm.css'
import { useNavigate } from 'react-router-dom';

const CategoriesForm = (props) => {
    
    const navigate = useNavigate()

    var data = {
        name: '',
        description: '',
        type: 'POST',
    }

    if (props.categories){
        data = {
            name: props.categories.name,
            description: props.categories.description,
            type: 'PUT',
        }
    }
    const handleSubmit = async (values, {setSubmitting}) => {
        values.type === 'POST'
        ? postReq('/categories', {name: values.name, description: values.description})
        : putReq('/categories/' + props.categories.id, {name: values.name, description: values.description})
        setSubmitting(false)
        navigate('/backoffice/categories')
        window.location.reload()
    }
    
    const formik = useFormik({enableReinitialize:true, initialValues: data, validationSchema: CategoriesValidationSchema, onSubmit: handleSubmit});
    
    return (
        <>
        <section className="newsFormContainer">
            <h1>{data.type === 'POST' ? 'Crear una categoría' : 'Actualizar una categoría'}</h1>
            <FormikProvider value={formik}>
                <Form className="news-form">
                    <Field placeholder='Nombre Categoría' name="name" className="news-field"/> 
                    <ErrorMessage name='name'>{msg => <span className="error">{msg}</span>}</ErrorMessage>
                    <Field as='textarea' name="description" className="news-field"/>
                    <ErrorMessage name='description'>{msg => <span className="error">{msg}</span>}</ErrorMessage>
                    <button type="submit" disabled={formik.isSubmitting} className="button-primary">Enviar</button>
                </Form>
            </FormikProvider>
        </section>
        </>
    )
}

export default CategoriesForm