import React, {FC, ReactNode, useState } from 'react'
import Header from '../Header/Header'
import "./style.css"
interface IPageTemplate{
   title: string,
   children?: ReactNode,
}
const PageTemplate: (FC<IPageTemplate>) = ({ title, children }) => {
   
   const [isDark, setIsDark] = useState(false)
   return (
      <div className={`PageTemplate ${isDark ? 'dark' : ''}`}>
        <Header />
        <main >
           <a href="#">Back to home</a>
           <div className='title-wrapper'>
              <h1>{title}</h1>
              <button onClick={()=>setIsDark(prevState=>!prevState)}>Toggle theme</button>
           
           </div>
           
           <div className='conten'>
               {children}
           </div>
           
        </main>
        <footer>
           <span>2022</span>
           <span>all right reserved </span>
        </footer>
        
    </div>
  )
}

export default PageTemplate
