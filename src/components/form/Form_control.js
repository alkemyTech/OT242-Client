import React from 'react'
import Input from './Input'
import Textarea from './Textarea'

function Form_control (props) {
  const { control, ...rest } = props
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'textarea':
      return <Textarea {...rest} />
    default:
      return null
  }
}

export default Form_control 