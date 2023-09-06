import React, { useState,FC } from 'react'
import { IPost } from '../../Pages/PostList/PostList'
import "./style.css"
import { Routes, Route, Link, NavLink, useNavigate, useLocation, useParams, Navigate } from "react-router-dom";



const Post: FC<IPost> = ({ title, date, image, description, id, onClick, customClass }) => {
   const navigate = useNavigate();
   return (
      <li className={customClass} onClick={() => navigate(`/posts/${id}`,{state: {id,image,title,description,date}})}>
         {image && <img className='post__img' src={image} alt="img" />}
         <div className='post__date'>{date}</div>
         <h2 className='post__title'>{title}</h2>
         <div className='post__text'>{description}</div>

      </li>
   )
}

export default Post
