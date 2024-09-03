import React from 'react'
import MoofliText from './utils/MoofliText'
import BorderBottom from './utils/BorderBottom'
import Input from './utils/Input'
import SignUpBtn from './img/signUp-2.png'
import SignUpWithGoole from './img/signup-google.png'
import Orbreak from './utils/Or-break'
import './sign-up.css'

const SignUp = () => {
  return (
    <div className='sign-up-page'>
      <MoofliText/>
      <div className='sign-up-text-container'>
        <div className='sign-up-text'>SIGN UP</div>
        <BorderBottom/>
      </div>

      <div className='first-name'>
        <Input inputTextValue = "First name" inputTextType="text"/>
      </div>
      <div className='last-name'>
        <Input inputTextValue = "Last name" inputTextType="text"/>
      </div>
      <div className='email'>
        <Input inputTextValue = "Email" inputTextType="email"/>
      </div>
      <div className='password'>
        <Input inputTextValue = "Password" inputTextType="password"/>
      </div>
      <div className='repassword'>
        <Input inputTextValue = "Re-enter password" inputTextType="password"/>
      </div>

      <div className='sign-up-btn-container'>
        <img src={SignUpBtn} className='sign-up-btn'/>
      </div>

      <Orbreak/>

      <div className='sign-up-google-container'>
        <img src={SignUpWithGoole} className='sign-up-google'/>
      </div>
      
    </div>
  )
}

export default SignUp
