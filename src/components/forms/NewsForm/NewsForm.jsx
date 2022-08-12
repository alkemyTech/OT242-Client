import React from 'react';
import { Form, Field, ErrorMessage, useFormik, FormikProvider} from 'formik';
import { NewsValidationSchema } from '../../../utils/validationSchemas';
import { postReq, putReq } from '../../../helpers/ReqToApi';
import customEditor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import './NewsForm.css'

const NewsForm = (props) => {
    var data = {
        name: '',
        image: '',
        content: '',
        categoryId: '',
        type: 'POST',
    }

    if (props.newsDetail){
        data = {
            name: props.newsDetail.name,
            image: props.newsDetail.image,
            content: props.newsDetail.content,
            categoryId: props.newsDetail.categoryId,
            type: 'PATCH',
        }
    }
    
    const inputHandler = (_, editor) => {
        formik.setFieldValue('content', editor.getData());
    }

    const handleSubmit = async (values, {setSubmitting}) => {
        values.type === 'POST'
        ? postReq('/admin/news', {name: values.name, image: values.image, content: values.content, categoryId: values.categoryId})
        : putReq('/news/' + props.newsDetail.id, {name: values.name, image: values.image, content: values.content, categoryId: values.categoryId})
        setSubmitting(false)
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
                    <Field placeholder='Imagen' name="image" className="news-field"/> 
                    <ErrorMessage name='image'>{msg => <span className="error">{msg}</span>}</ErrorMessage>
                    <CKEditor
                        name="content"
                        className="news-field"
                        config={{placeholder: 'Contenido'}}
                        data={formik.values.content}
                        editor={customEditor}
                        onChange={inputHandler}
                    />
                    <ErrorMessage name='content'>{msg => <span className="error">{msg}</span>}</ErrorMessage>
                    <Field as="select" placeholder='Categoría' name="categoryId" className="news-field">
                            <option value="1">categoría 1</option>
                            <option value="2">categoría 2</option>
                            <option value="3">categoría 3</option>
                        </Field> 
                    <ErrorMessage name='categoryId'>{msg => <span className="error">{msg}</span>}</ErrorMessage>
                    <button type="submit" disabled={formik.isSubmitting}>Enviar</button>
                </Form>
            </FormikProvider>
        </section>
        </>
    )
}

export default NewsForm