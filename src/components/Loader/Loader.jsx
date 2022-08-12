import React from 'react'
import { ThreeCircles } from  'react-loader-spinner'
import classNames from 'classnames/bind'
import s from './Loader.module.css'

let cx = classNames.bind(s)

/**
 This component is used to display a loader in a part of the screen.
 props:
  - children: elements that will be shown inside the loader (optional).
  - className: class to be applied to the loader container (default is 'default_loader'). You can add styles to the loader by selecting svg elements and adding styles to them.
  - colors: array of 3 colors to be applied to the loader. If the 3 colors are not passed, the default color will be applied.
  - size: size of the loader. Possible values: 'small', 'medium' (default), 'large', 'giant'.
 */

const Loader = ({children, className, colors, size}) => {
  if (colors.length !== 3) colors = ['#DB5752', '#9AC9FB', '#FAFA88'];
  return (
    <div className={cx('loader_container')}>
      <div className={cx('loader_content')}>
        <ThreeCircles
          outerCircleColor={colors[0] ? colors[0] : `#DB5752`} // red-logo
          middleCircleColor={colors[1] ? colors[1] : `#9AC9FB`} // blue-logo
          innerCircleColor={colors[2] ? colors[2] : `#FAFA88`} // yellow-logo
          wrapperClass={cx('default_loader', size, className)}
        />
        {children} 
      </div>
    </div>
  )
}

export default Loader