import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import AlertForm from "../alerts/AlertForm";
import { postReq } from "../../helpers/ReqToApi";
import Success from "../alerts/Success";
import * as Yup from 'yup';


const ContactForm = () => {

  const [alert, setAlert] = useState(false)
  const [confirmation, setConfirmation] = useState(false)

  const phoneYup = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


  const validationSchema = Yup.object({
    name: Yup.string()
    .min(2, 'Demasiado corto!')
    .max(50, 'Demasiado largo!')
    .required('Campo requerido'),

    phone: Yup.string().matches(phoneYup, 'El numero ingresado es inválido'),

    email: Yup.string()
    .email('Formato de email invalido')
    .required('Campo requerido'),
    
    message: Yup.string()
    .required('Campo requerido')
    .min(2, 'Su mensaje es demasiado breve!'),


})

  return (
    <>
      <Formik initialValues= {{
        name:'',
        email:'',
        phone: '',
        message:''
      }}
        

        validationSchema={validationSchema}

        onSubmit={async (values, { setSubmitting, resetForm }) => {
          
          try {
            await postReq('/contacts', values)
            resetForm();
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
            setConfirmation(true)
            setTimeout(() =>{
              setConfirmation(false)
            }, 5000)
          } catch (error) {
              setAlert(true);
              console.log(error)
            }
            setTimeout(() =>{
              setAlert(false)
            }, 5000)
        }
    
        }
      
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
               placeholder="Ingrese su nombre aqui"
                /> 
              {errors.name && touched.name ? (
             <AlertForm error={errors.name}/>
             ) : null}

              <Field 
               className = "form_input"
               name="phone"
               type="text"
               placeholder="Ingrese un telefono de contacto"
                /> 
              {errors.phone && touched.phone ? (
             <AlertForm error={errors.phone}/>
             ) : null}

               <Field 
               className = "form_input"
               name="email"
               type="email"
               placeholder="Ingrese una direccion de e-mail"
                /> 
              {errors.email && touched.email ? (
             <AlertForm error={errors.email}/>
             ) : null}

               <Field 
               className = "form_input text"
               name="message"
               type="message"
               placeholder="Escriba aqui su mensaje"
                /> 
              {errors.message && touched.message ? (
             <AlertForm error={errors.message}/>
             ) : null}

          <button type="submit" disabled={isSubmitting} className="submit_btn">
             Enviar
          </button>

          <div>
                {alert && <AlertForm error={"El mensaje no fue enviado"}/>}
                {confirmation && <Success prop={"El mensaje fue enviado exitosamente"}/>}
          </div>

         </Form>
       )}
     </Formik>
   </>
 )};
      
export default ContactForm;
