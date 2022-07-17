import React from 'react'
import { Field, ErrorMessage } from 'formik'

function Textarea (props) {
  const { label, name, ...rest } = props
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field as='textarea' id={name} name={name} {...rest} />
      <ErrorMessage name={props.name} component={() => (
            <div className="error_msg">{props.errormsg}</div>
        )}/>
    </div>
  )
}

export default Textarea 
