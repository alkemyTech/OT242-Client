import React from 'react'
import { ThreeCircles } from  'react-loader-spinner'
import s from './Loader.module.css'

const Loader = () => {
  return (
    <div className={s.loader_container}>
      <ThreeCircles
        outerCircleColor="#DB5752" // red-logo
        middleCircleColor="#9AC9FB" // blue-logo
        innerCircleColor="#FAFA88" // yellow-logo
      />
    </div>
  )
}

export default Loader