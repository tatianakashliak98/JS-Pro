import React, { useEffect, useState } from 'react'
import { IPost } from '../../Pages/PostList/PostList';
import { Routes, Route, Link, NavLink, useNavigate, useLocation, useParams, Navigate } from "react-router-dom";
import PageTemplate from '../PageTemplate/PageTemplate';
import Header from '../Header/Header';
import Input from '../Input/Input';
import Post from '../Post/Post';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './style.css'

const SearchPage = () => {
   const [dataSearch, setDataSearch] = useState("");
   const [posts, setPosts] = useState<IPost[]>([]);
   const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false)
   const handleBurgerClick = () => {
      setIsOpen(!isOpen);
   }
 
    const getPosts = () => {
 
     fetch('https://studapi.teachmeskills.by/blog/posts/?limit=12')
       .then((response) => response.json())
       .then((data) => {
         setPosts(data.results);
 
       })
       .catch((err) => {
         console.log(err.message)
       });
   };
   useEffect(() => getPosts(), [])

   let searchPosts = posts.filter((post) => {
      return post.title.toLowerCase().includes(dataSearch);
    });
  return (
    <div className={`PageTemplate ${isDark ? 'dark' : ''}`}>
    <div className='header__wrapper'>
         <BurgerMenu customClass='burger' text={isOpen ? 'x' : '☰'} onClick={handleBurgerClick}>
            <div className={`user burger__opened ${isOpen ? 'visible' : ""}`}>
               <span className='user__icon'>AM</span>
               Artem Malkin
            </div>
         </BurgerMenu >
         <div className='header__search'>
          <Input customClass='search__input' value={dataSearch} onChange={setDataSearch} label='' type="text" placeholder='Search' />
           
         </div>
         <button className='header__button-search'>&#128269;</button>
         <div className='user'> <span className='user__icon'>AM</span> Artem Malkin</div>
         

     </div>
    <main >
       <a onClick={()=>navigate('/posts')}>Back to home</a>
       <div className='title-wrapper'>
          <h1>Search ...</h1>
          <button onClick={()=>setIsDark(prevState=>!prevState)}>Toggle theme</button>
       
       </div>
       
       <div className='conten'>
       <div className='search__posts'>
      {
          Array.isArray(searchPosts) && searchPosts.map(({ id, date, title, description, image }) => dataSearch.length > 2 ?
            <Post customClass='search__post' key={id} id={id} date={date} title={title} description={description} image={image} /> : '')
        }
      </div>
       </div>
       
    </main>
    <footer>
       <span>2022</span>
       <span>all right reserved </span>
    </footer>
    
</div>
  )
}

export default SearchPage
