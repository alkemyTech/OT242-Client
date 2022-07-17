import React from 'react'
import { Formik } from 'formik'
import { validateHomeData } from '../../services/validateForm'
import { Carousel } from 'react-bootstrap'

/** Component description
 This is the form to update the home data. As props it receives the HomeData object with sould contain the information already shown in the home
 for welcome text and the slides.
 Props:
  HomeData: {
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
    <section>
      <Formik
        initialValues={HomeData}
        validate={validateHomeData}
        onSubmit={(values, {setSubmitting}) => {
          // set values in global or parent state
          console.log(values)
          setSubmitting(false)
        }}
      >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <textarea 
            name="welcomeText"
            value={values.welcomeText}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.welcomeText && touched.welcomeText && errors.welcomeText}
          <Carousel>
            {values.slides.map((slide, index) => (
              <Carousel.Item key={`update-slide-${index}`}>
                <input 
                  type="text"
                  name="img"
                  value={slide.img}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors[`slides[${index}].img`] && touched[`slides[${index}].img`] && errors[`slides[${index}].img`]}
                <input 
                  type="text"
                  name="title"
                  value={slide.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors[`slides[${index}].title`] && touched[`slides[${index}].title`] && errors[`slides[${index}].title`]}
                <input 
                  type="text"
                  name="description"
                  value={slide.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <button type="submit" disabled={isSubmitting}>Actualizar</button>
        </form>
      )}
      </Formik>
    </section>
  )
}

export default UpdateHomeData