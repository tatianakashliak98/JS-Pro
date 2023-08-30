import React, {ReactNode, FC} from 'react'
import "./style.css"

interface IBurgerMenu {
   text: string,
   customClass: string,
   children: ReactNode,
   onClick:()=>void
}
const BurgerMenu: FC<IBurgerMenu> = ({text,customClass, children,onClick}) => {
  return (
      <button className={customClass} onClick={onClick}>
        {text}
        {children}
        </button>
    
  )
}

export default BurgerMenu
