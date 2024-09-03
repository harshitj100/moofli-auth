import React from 'react'
import './Input.css'
const Input = ({inputTextValue , inputTextType}) => {
  return ( 
    <div className='Input-element'>
      <div className='Input-text'>
        {inputTextValue}
      </div>
      <input type={inputTextType} className='Input-data'/>
    </div>
  )
}

export default Input
