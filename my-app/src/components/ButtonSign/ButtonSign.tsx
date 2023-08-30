import React, { FC } from 'react'
import "./ButtonSign.css"
interface IButtonSign{
   titleButton: string,
   onClick?:()=>void,
}
const ButtonSign:FC<IButtonSign>= ({titleButton,onClick}) => {
  return (
    <button className='ButtonSign' onClick={onClick}>
      {titleButton}
    </button>
  )
}

export default ButtonSign
