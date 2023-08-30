import React, { ReactNode } from 'react'
interface ITab {
   text: string;
   customClass: string,
   children?: ReactNode,
}
const Tab = ({ text, customClass, children }: ITab) => {
   return (
      <div className={customClass}>
         {text}
         {children}
      </div>
   )
}

export default Tab
