import React from 'react'
import './Button_VM.css'

const ButtonVM = ({color, text, onClick}) => {

  return (
<div id="container">
  <button className="learn-more">
    <span className="circle" aria-hidden="true">
      <span className="icon arrow"></span>
    </span>
    <span className="button-text">{text}</span>
  </button>
</div>
  )
}

export default ButtonVM