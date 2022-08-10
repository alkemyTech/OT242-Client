import React from 'react'
import "./alert.css"

const ErrorAlertAuth = ({error}) => {
  return (

    <p className="error_alert_auth">{error}</p>
    
  )
}

export default ErrorAlertAuth