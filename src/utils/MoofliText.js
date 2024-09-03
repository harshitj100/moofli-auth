import React from 'react'
import skillop from '../img/skillop.png'
import './mooflitext.css'

const MoofliText = () => {
  return (
    <div className='skillop-moofli'>
      <div className='moofli-image'>
        <img src={skillop} className='moof-img'/>
      </div>
      <div className='moofli-text'>
        SKILLOP
      </div>
    </div>
  )
}

export default MoofliText
