import React from 'react'
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik'
import { HomeDataSchema } from '../../utils/validationSchemas'
import  s  from './UpdateHomeData.module.css'

/** Component description
 This is the form to update the home data. As props it receives the HomeData object with sould contain the information already shown in the home
 for welcome text and the slides.
 Props:
  HomeData: {
    welcometTitle: string,
    welcomeText: string,
    slides: [
      {
        img: string,
        title: string,
        description: string,
      },
      ... 2 more slides
    ]
  }
 */

const UpdateHomeData = ({HomeData}) => {
  return (
    <section className={s.main_container}>
      <h1>Actualizá la información del Home</h1>
      <Formik
        initialValues={HomeData}
        validationSchema={HomeDataSchema}
        onSubmit={(values, {setSubmitting}) => {
          // set values in global or parent state
          console.log(values)
          setSubmitting(false)
        }}
      >
      {({
        values,
        errors,
        isSubmitting,
      }) => (
        <Form className={s.form}>
          <Field placeholder='Título de bienvenida' name="welcomeTitle" className={`${s.welcomeTitle} ${errors.welcomeTitle ? s.focus_error : null}`}/> 
          <ErrorMessage name='welcomeTitle'>{msg => <span className={s.error}>{msg}</span>}</ErrorMessage>
          <Field placeholder='Texto de bienvenida' name="welcomeText" component="textarea" className={`${s.welcomeText} ${errors.welcomeText ? s.focus_error : null}`}/> 
          <ErrorMessage name='welcomeText'>{msg => <span className={s.error}>{msg}</span>}</ErrorMessage>
            <FieldArray 
              name="slides"
              render={_ => (
                <div className={s.slides_container}>
                    {values.slides.map((slide, index) => (
                      <article key={`update-slide-${index}`} className={s.slide_fields} >
                          {errors.slides && errors.slides[index] && errors.slides[index].img ? null : <img src={slide.img} alt='slide'/>}
                          <div className={s.field_container}>
                            <Field placeholder="Imagen URL" name={`slides[${index}].img`} className={errors.slides && errors.slides[index] && errors.slides[index].img ? s.focus_error : null}/>
                            <ErrorMessage name={`slides[${index}].img`}>{msg => <div className={s.slide_error}><p className={`${s.error}`}>{msg}</p></div>}</ErrorMessage>
                          </div>
                          <div className={s.field_container}>
                            <Field placeholder="Título de la Slide" name={`slides[${index}].title`} className={`${errors.slides && errors.slides[index] && errors.slides[index].title ? s.focus_error : null} ${s.field_title}`}/>
                            <ErrorMessage name={`slides[${index}].title`}>{msg => <div className={s.slide_error}><p className={`${s.error}`}>{msg}</p></div>}</ErrorMessage>
                          </div>
                          <div className={s.field_container}>
                            <Field placeholder="Descripción" name={`slides[${index}].description`} component='textarea' className={errors.slides && errors.slides[index] && errors.slides[index].description ? s.focus_error : null}/>
                            <ErrorMessage name={`slides[${index}].description`}>{msg => <div className={s.slide_error}><p className={`${s.error}`}>{msg}</p></div>}</ErrorMessage>
                          </div>
                      </article>
                    ))}
                </div>
              )}
            />
          <button type="submit" disabled={isSubmitting}>Actualizar</button>
        </Form>
      )}
      </Formik>
    </section>
  )
}

export default UpdateHomeData