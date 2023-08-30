import React from 'react'
import ButtonSign from '../ButtonSign/ButtonSign'
import "./style.css"

const Success = () => {
  return (
      <form>
           <span className='SuccessEmail'>
              Email Confirmed
              <br />
              Your registration in move completed
           </span>
                     <ButtonSign titleButton='Go to home' />
                  </form>
  )
}

export default Success
