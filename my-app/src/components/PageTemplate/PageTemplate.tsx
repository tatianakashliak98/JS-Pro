import  { FC, ReactNode} from 'react'
import {useNavigate} from "react-router-dom";
import Header from '../Header/Header'
import "./style.css"
import { useSelector} from 'react-redux';
import { StyledPageTemplate } from './StyledPageTemplate';
import Loader from '../Loader/Loader';
interface IPageTemplate{
   title: string,
   children?: ReactNode,
}
const PageTemplate: (FC<IPageTemplate>) = ({ title, children }) => {
   const navigate = useNavigate();
   const theme = useSelector(({theme})=>theme);
   const isLoading = useSelector(({isLoading}) => isLoading)
   return (
      <StyledPageTemplate theme={theme}>
        <Header />
        <main >
           <a onClick={()=>navigate('/posts')}>Back to home</a>
           <div className='title-wrapper'>
              <h1>{title}</h1>
           
           </div>
           
           <div className='conten'> 
               {isLoading ? <Loader/> : children}
           </div>  
        </main>
        <footer>
           <span>2022</span>
           <span>all right reserved </span>
        </footer>
        
    </StyledPageTemplate>
  )
}
export default PageTemplate
