// react
import React, { useState } from "react";

// files, components and functions
import AlertForm from "../../alerts/AlertForm";
import { postReq } from "../../../helpers/ReqToApi";
import Success from "../../alerts/Success";
import './ContactForm.css';

//dependencies
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import Loader from "../../Loader/Loader";
import { useNavigate } from 'react-router-dom';



const ContactForm = () => {

  const [alert, setAlert] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const navigate = useNavigate();

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

          <Form className="contactForm">
                <h2 className="contactTitle">¡Contactate con nosotros!</h2>
               <Field 
               className = "contactInput"
               name="name"
               type="name"
               placeholder="Nombre y Apellido"
                /> <br /><br />
              {errors.name && touched.name ? (
             <AlertForm error={errors.name}/>
             ) : null}

              <Field 
               className = "contactInput"
               name="phone"
               type="text"
               placeholder="Telefono"
                /> <br /><br />
              {errors.phone && touched.phone ? (
             <AlertForm error={errors.phone}/>
             ) : null}

               <Field 
               className = "contactInput"
               name="email"
               type="email"
               placeholder="Email"
                /> <br /><br />
              {errors.email && touched.email ? (
             <AlertForm error={errors.email}/>
             ) : null}

               <Field 
               className = "contactText"
               name="message"
               as="textarea"
               placeholder="Escribe tu consulta"
                /> <br /><br />
              {errors.message && touched.message ? (
             <AlertForm error={errors.message}/>
             ) : null}
         <div className="state_msg">
          <button type="submit" disabled={isSubmitting} className="contactSubmit">
             Enviar consulta {isSubmitting && <Loader className='loader' size='small' colors={[]} />}
          </button> {alert && <AlertForm error={"El mensaje no fue enviado"}/>}
                    {confirmation && <Success prop={"El mensaje fue enviado exitosamente"}/>}
          </div>
         </Form>
       )}
     </Formik>
   </>
 )};
      
export default ContactForm;
