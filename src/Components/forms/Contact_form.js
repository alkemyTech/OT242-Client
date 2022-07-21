import React from "react";
import { Formik, Form, Field } from "formik";


const ContactForm = () => {

  return (
    <>
      <Formik initialValues= {{
        name:'',
        email:'',
        message:''
      }}
        validate={(values) => {
          const errors = {};
          if (values !== '') {
            if (!values.name) {
              errors.name = "Por favor, indique su nombre";
            } else if (!values.email) {
              errors.email = "Campo obligatorio";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Dirección de mail invalida";
            } else if (!values.message) {
              errors.message = "El mensaje no puede enviarse vacio"
            }
          
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            resetForm();
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
       
        {({
          values,
          errors,
          touched,
          isSubmitting,
        }) => (

          <Form className="form">
                <h2>Pongase en contacto con nosotros</h2>
               <Field 
               className = "form_input"
               name="name"
               type="name"
               placeholder="Escriba su nombre aqui"
                /> 
              {errors.name && touched.name && errors.name}

               <Field 
               className = "form_input"
               name="email"
               type="email"
               placeholder="Ingrese una direccion de e-mail"
                /> 
              {errors.email && touched.email && errors.email}

               <Field 
               className = "form_input text"
               name="message"
               type="message"
               placeholder="Escriba aqui su mensaje"
                /> 
              {errors.message && touched.message && errors.message}

          <button type="submit" disabled={isSubmitting} className="submit_btn">
             Enviar
           </button>
         </Form>
       )}
     </Formik>
   </>
 )};
      
export default ContactForm;
