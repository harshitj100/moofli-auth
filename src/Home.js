import React from 'react'
import MoofliText from './utils/MoofliText'
import login from './img/login-1.png'
import signup from './img/signup-1.png'
import BorderBottom from './utils/BorderBottom'
import './Home.css'


const Home = () => {
  return (
    <div className='home-page'>
      <div className='home-top'>
        <MoofliText/>
      </div>

      <div className='home-middle'>
        <div className='shuruwat-text-container'>
            Shuru Se 
            <div className='shuruwat-span-text'>
              <span>Shuruwat</span> 
              <BorderBottom/>

            </div>
            Krte Hain!
        </div>
        <div className='skillop-desc'>
          SKILLOP serves as a dynamic tech society cluster, to build and grow together!
        </div>
      </div>
      
      <div className='home-bottom'>
        <div className='login-btn-container'>
          <img src = {login} className='login-btn'/>
        </div>

        <div className='signup-btn-container'>
          <img src = {signup}  className='signup-btn'/>
        </div>
      </div>
    </div>
  )
}

export default Home
