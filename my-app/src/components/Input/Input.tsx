import React, { FC, useState } from 'react'

import { StyledInput } from './Styled';

interface IInput {
   type: 'password' | 'text',
   label: string,
   placeholder: string,
   value:string,
   onChange: (value: string) => void,
   customClass?:string,
}
const Input: FC<IInput> = ({ type, label, placeholder,value, onChange,customClass }) => {
   const [inputValue, setInputValue] = useState('');
   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.currentTarget.value)
      onChange(event.target.value)
   }
   return (
      <>
         <span>{label}</span>
         <StyledInput className={customClass} type={type} placeholder={placeholder} value={value} onChange={(e)=>onChange(e.currentTarget.value)}>
         </StyledInput>

      </>
   )
}

export default Input
