import React, { useEffect, useState } from 'react';
import { Form, Field, ErrorMessage, useFormik, FormikProvider} from 'formik';
import { TestimonialsValidationSchema } from '../../../utils/validationSchemas';
import { postReq, putReq } from '../../../helpers/ReqToApi';
import '../NewsForm/NewsForm.css'
import { useNavigate } from 'react-router-dom';

const TestimonialsForm = (props) => {
    
    const navigate = useNavigate()
    const [ image, setImage ] = useState(null)

    var data = {
        name: '',
        content: '',
        type: 'POST',
    }

    console.log(props.testimonials)

    if (props.testimonials){
        data = {
            name: props.testimonials.name,
            content: props.testimonials.content,
            type: 'PUT',
        }
    }
    const handleSubmit = async (values, {setSubmitting}) => {
        console.log("enviando")
        const data_im = new FormData();
        data_im.append('image', image);
        data_im.append('name', values.name);
        data_im.append('content', values.content);
        
        values.type === 'POST'
        ? postReq('/testimonials', data_im)
        : putReq('/testimonials/' + props.testimonials.id, data_im)
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

export default TestimonialsForm