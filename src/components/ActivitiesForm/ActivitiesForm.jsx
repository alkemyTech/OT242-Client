import React from 'react';
import { Form, Field, ErrorMessage, useFormik, FormikProvider} from 'formik';
import { ActivitiesSchema } from '../../utils/validationSchemas';
import { postReq, patchReq } from '../../helpers/ReqToApi';

import customEditor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from "@ckeditor/ckeditor5-react";

import s from './ActivitiesForm.module.css';
import './ckeditor.css'

const ActivitiesForm = ({activity = null}) => {
  let initialState = {};
  if (!activity){
    initialState = {
      name: '',
      content: '',
      type: 'POST',
    }
  }
  else {
    initialState = {
      name: activity.name,
      content: activity.content,
      type: 'PATCH',
    }
  }

  const inputHandler = (_, editor) => {
    formik.setFieldValue('content', editor.getData());
  }

  const handleSubmit = async (values, {setSubmitting}) => {
    values.type === 'POST'
      ? postReq('/activities', {name: values.name, content: values.content})// create new activity
      : patchReq('/activities', {name: values.name, content: values.content})// update activity 
    setSubmitting(false)
  }

  const formik = useFormik({initialValues: initialState, validationSchema: ActivitiesSchema, onSubmit: handleSubmit});
  return (
    <section className={s.main_container}>
      <h1>{initialState.type === 'POST' ? 'Crea una nueva actividad' : 'Actualiza la actividad'}</h1>
      <FormikProvider value={formik}>
        <Form className={s.form}>
          <Field placeholder='Nombre de la actividad' name="name" className={`${s.activityName} ${formik.errors.name ? s.focus_error : null}`}/> 
          <ErrorMessage name='name'>{msg => <span className={s.error}>{msg}</span>}</ErrorMessage>
          <CKEditor
              name="content"
              className={`${s.activityContent} ${formik.errors.content ? s.focus_error : null}`}
              config={{placeholder: 'Contenido de la actividad'}}
              data={formik.values.content}
              editor={customEditor}
              onChange={inputHandler}
          />
          <ErrorMessage name='content'>{msg => <span className={s.error}>{msg}</span>}</ErrorMessage>
          <button type="submit" disabled={formik.isSubmitting}>Actualizar</button>
        </Form>
      </FormikProvider>
    </section>
  )
}

export default ActivitiesForm