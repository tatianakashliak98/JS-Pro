import React, { ReactNode } from 'react'
interface ITab {
   text: string;
   customClass?: string,
   children?: ReactNode,
   onClick?: () => void;
}
const Tab = ({ text, customClass, children,onClick }: ITab) => {
   return (
      <div onClick={onClick} className= {`tab_container ${customClass}`}>
         {text}
         {children}
      </div>
   )
}

export default Tab
