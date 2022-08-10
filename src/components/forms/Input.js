import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Input (props) {
  const { place_holder,label, name, ...rest } = props
  return (
    <div className='form-control'>
      <Field id={name} name={name} {...rest} placeholder={place_holder} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Input