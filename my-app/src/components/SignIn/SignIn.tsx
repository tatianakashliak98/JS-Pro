import React, { useState } from 'react'
import Input  from '../Input/Input'
import PageTemplate from '../PageTemplate/PageTemplate'
import "./SignIn.css"
import ButtonSign from '../ButtonSign/ButtonSign'

const SignIn = () => {
   const [isSignIn, setSignIn] = useState(false)
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const handleClick = () => {
      console.log(123)
   }
   return (
         <form>
            <Input type='text' placeholder='Your Email' label='Email' value={email} onChange={setEmail} />
            <Input type='password' placeholder='Your password' label='Password' value={password} onChange={setPassword}/>
            <ButtonSign titleButton='Sign In' onClick={handleClick} />
         </form>


   )
}
{/* <PageTemplate title='Success'>
                  <form>
                     <span className='SuccessEmail'>Email Confirmed</span>
                     <ButtonSign titleButton='Sign In' onClick={() => setSignIn(prevState => !prevState)} />
                  </form>
               </PageTemplate> */}
export default SignIn
