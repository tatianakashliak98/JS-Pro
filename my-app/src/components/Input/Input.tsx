import React, { FC, useState } from 'react'
import './style.css'
interface IInput {
   type: 'password' | 'text',
   label: string,
   placeholder: string,
   value:string,
   onChange:(value:string)=>void,
}
const Input: FC<IInput> = ({ type, label, placeholder,value, onChange }) => {
   const [inputValue, setInputValue] = useState('');
   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.currentTarget.value)
      onChange(event.target.value)
   }
   return (
      <>
         <span>{label}</span>
         <input className='input__style' type={type} placeholder={placeholder} value={value} onChange={(e)=>onChange(e.currentTarget.value)}>
         </input>
      </>
   )
}

export default Input
