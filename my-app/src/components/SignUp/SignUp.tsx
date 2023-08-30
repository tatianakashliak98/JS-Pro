import React , { useState }from 'react'
import PageTemplate from '../PageTemplate/PageTemplate'
import Input from '../Input/Input'
import ButtonSign from '../ButtonSign/ButtonSign'
import { StyledForm } from '../SignIn/Styled'

const SignUp = () => {
  const [isSignUp, setSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [confirmPassword, SetconfirmPassword] = useState('')
  const [password, setPassword] = useState('')
  const handleClick = () => {
     console.log(123)
  }
  return (
      <StyledForm>
        <Input type='text' label='Name' placeholder='Your name' value={name} onChange={setName}/>
        <Input type='text' label='Email' placeholder='Your Email' value={email} onChange={setEmail}/>
        <Input type='password' label='Password' placeholder='Your Password' value={password} onChange={setPassword}/>
        <Input type='password' label='Confirm password' placeholder='Confirm Password' value={confirmPassword} onChange={SetconfirmPassword}/>
        <ButtonSign titleButton='Sign Up' onClick={handleClick} />
      </StyledForm>


  )
}

export default SignUp
