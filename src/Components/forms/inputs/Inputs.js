import React from 'react'
import AlertForm from '../../alerts/AlertForm'
import './inputs.css'

const Inputs = ({value, onChange, type, name, onBlur, touched, error, label}) => {
  return (

    <>
    <div className="inputs_container">

      <div className="Inputs_label">
                
        <input 
            type={type}
            id={name}
            autoComplete="off"
            className={`input_contact ${error && touched ? "input_contact_error " : "input_contact_check"} `}
            
            placeholder= " "
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            />
            <label htmlFor={name} className="label_contact">{label}</label>
        </div>

        <div className="mt-2">
            {error && touched && <AlertForm error={error}/>}
        </div>

    </div>
    
    </>
  )
}

export default Inputs