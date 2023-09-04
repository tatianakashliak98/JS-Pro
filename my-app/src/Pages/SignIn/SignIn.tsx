import React, { useState } from 'react'
import Input from '../../components/Input/Input'
import PageTemplate from '../../components/PageTemplate/PageTemplate'
import "./SignIn.css"
import ButtonSign from '../../components/ButtonSign/ButtonSign'
import { StyledForm } from './Styled'
import "./style.css"

const SignIn = () => {
   const [isSignIn, setSignIn] = useState(false)
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const handleClick = () => {
      console.log(123)
   }
   return (
      <PageTemplate title='Sign In'>
         <StyledForm>
            <Input customClass='input__style-form' type='text' placeholder='Your Email' label='Email' value={email} onChange={setEmail} />
            <Input customClass='input__style-form' type='password' placeholder='Your password' label='Password' value={password} onChange={setPassword} />
            <ButtonSign titleButton='Sign In' onClick={handleClick} />
         </StyledForm>
      </PageTemplate>


   )
}
export default SignIn
