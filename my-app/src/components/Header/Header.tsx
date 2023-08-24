import React, {useState} from 'react'
import "./style.css"
import BurgerMenu from '../BurgerMenu'

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);
   const handleBurgerClick = () => {
      setIsOpen(!isOpen);
   }
   return (
      <div className='header__wrapper'>
         <BurgerMenu customClass='burger' text={isOpen ? 'x' : '☰'} onClick={handleBurgerClick}>
         <div className={`user burger__opened ${isOpen ? 'visible': ""}`}><span className='user__icon'>AM</span>Artem Malkin</div>
         </BurgerMenu>
         <div className='header__search'>
            <input className='header__input' type="text" placeholder='Search' />
            <button className='search__clean'>X</button>
         </div>
         <button className='header__button-search'>&#128269;</button>
         <div className='user'> <span className='user__icon'>AM</span> Artem Malkin</div>
         

      </div>
   )
}

export default Header
