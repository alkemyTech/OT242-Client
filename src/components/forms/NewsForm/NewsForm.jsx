import React, { useEffect, useState } from 'react';
import { Form, Field, ErrorMessage, useFormik, FormikProvider} from 'formik';
import { NewsValidationSchema } from '../../../utils/validationSchemas';
import { postReq, putReq, getReq } from '../../../helpers/ReqToApi';
import './NewsForm.css'
import { useNavigate } from 'react-router-dom';

const NewsForm = (props) => {
    const [ categories, setCategories] = useState([]);
    const navigate = useNavigate()
    const getData = async () => {
        const {data} = await getReq('/categories');
        setCategories(data);
    };

    useEffect(() => {
        getData();
    }, [])

    console.log(categories)
    var data = {
        name: '',
        content: '',
        type: 'POST',
    }

    if (props.newsDetail){
        data = {
            name: props.newsDetail.name,
            content: props.newsDetail.content,
            type: 'PUT',
        }
    }

    const handleSubmit = async (values, {setSubmitting}) => {
        values.type === 'POST'
        ? postReq('/admin/news', {name: values.name, image: values.image, content: values.content, categoryId: values.categoryId})
        : putReq('/admin/news/' + props.newsDetail.id, {name: values.name, image: values.image, content: values.content, categoryId: values.categoryId})
        setSubmitting(false)
        navigate('/backoffice/news')
        window.location.reload()
    }
    
    const formik = useFormik({enableReinitialize:true, initialValues: data, validationSchema: NewsValidationSchema, onSubmit: handleSubmit});
    
    return (
        <>
        <section className="newsFormContainer">
            <h1>{data.type === 'POST' ? 'Crear una novedad' : 'Actualizar una novedad'}</h1>
            <FormikProvider value={formik}>
                <Form className="news-form">
                    <Field placeholder='Título' name="name" className="news-field"/> 
                    <ErrorMessage name='name'>{msg => <span className="error">{msg}</span>}</ErrorMessage>
                    <Field type="file" name="image" className="news-field"/> 
                    <ErrorMessage name='image'>{msg => <span className="error">{msg}</span>}</ErrorMessage>
                    <Field as='textarea' name="content" className="news-field"/>
                    <ErrorMessage name='content'>{msg => <span className="error">{msg}</span>}</ErrorMessage>
                    <Field as="select" placeholder='Categoría' name="categoryId" className="news-field">
                        {categories.map(category => (
                            <option value={category.id}>{category.id} {category.name}</option>
                        ))}
                    </Field> 
                    <ErrorMessage name='categoryId'>{msg => <span className="error">{msg}</span>}</ErrorMessage>
                    <button type="submit" disabled={formik.isSubmitting} className="button-primary">Enviar</button>
                </Form>
            </FormikProvider>
        </section>
        </>
    )
}

export default NewsForm