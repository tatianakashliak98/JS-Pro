import React, {ReactNode} from 'react'
import "./style.css"

interface IBurgerMenu {
   text: string,
   customClass: string,
   children: ReactNode,
   onClick:()=>void
}
const BurgerMenu = ({text,customClass, children,onClick}:IBurgerMenu) => {
  return (
      <button className={customClass} onClick={onClick}>
        {text}
        {children}
        </button>
    
  )
}

export default BurgerMenu
