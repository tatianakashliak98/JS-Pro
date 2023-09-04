import React, {ReactNode, useState,FC} from 'react'
import "./style.css"
import BurgerMenu from '../BurgerMenu'
import { StyledBurgerComponent, StyledBurgerComponentUser } from './Styled';
import { useNavigate } from 'react-router-dom';


const Header = () => {
   const navigate = useNavigate();
   const [isOpen, setIsOpen] = useState(false);
   const handleBurgerClick = () => {
      setIsOpen(!isOpen);
   }
   return (
      <div className='header__wrapper'>
         <BurgerMenu customClass='burger' text={isOpen ? 'x' : '☰'} onClick={handleBurgerClick}>
            <div className={`user burger__opened ${isOpen ? 'visible' : ""}`}>
               <StyledBurgerComponentUser>
               <span className='user__icon'>AM</span>
               Artem Malkin
               </StyledBurgerComponentUser>
               <StyledBurgerComponent onClick={()=>navigate('/posts')}> Home </StyledBurgerComponent>
               <StyledBurgerComponent onClick={()=>navigate('/posts')}> Add post </StyledBurgerComponent>
               <StyledBurgerComponent onClick={()=>navigate('/signUp')}> Sign Up </StyledBurgerComponent>
            </div>
         </BurgerMenu>
         <div className='header__search'>
            {/* <input className='header__input' type="text" placeholder='Search' /> */}
            {/* <button className='search__clean'>X</button> */}
           
         </div>
         <button className='header__button-search' onClick={()=>navigate('/searchPage')}>&#128269;</button>
         <div className='user'> <span className='user__icon'>AM</span> Artem Malkin</div>
         

      </div>
   )
}

export default Header
