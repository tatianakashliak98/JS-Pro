import React, { useState } from 'react'
import Input  from '../Input/Input'
import PageTemplate from '../PageTemplate/PageTemplate'
import "./SignIn.css"
import ButtonSign from '../ButtonSign/ButtonSign'
import { StyledForm } from './Styled'


const SignIn = () => {
   const [isSignIn, setSignIn] = useState(false)
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const handleClick = () => {
      console.log(123)
   }
   return (

         <StyledForm>
            <Input type='text' placeholder='Your Email' label='Email' value={email} onChange={setEmail} />
            <Input type='password' placeholder='Your password' label='Password' value={password} onChange={setPassword}/>
            <ButtonSign titleButton='Sign In' onClick={handleClick} />
         </StyledForm>



   )
}

export default SignIn
