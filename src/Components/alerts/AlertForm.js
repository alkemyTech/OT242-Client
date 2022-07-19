import React from 'react'
import './alert.css'


const AlertForm = ({error}) => {
    return (
      <p className="alert_form">{error}</p>
  
    )
  }
  
export default AlertForm