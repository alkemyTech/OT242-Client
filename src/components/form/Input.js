import React from "react";
import { Field, ErrorMessage } from "formik";

const Input = (props) => {

    return (
        <>
        <Field className = "form_input" /> 

        <ErrorMessage name={props.name} component={() => (
            <div className="error_msg">{props.errormsg}</div>
        )}/>

        </>
    )
};

export default Input;

