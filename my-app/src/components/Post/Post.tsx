import React, { useState } from 'react'
import { IPost } from '../PostList/PostList'
import "./style.css"



const Post = ({ title, date, image, description, id }: IPost) => {

   return (
      <li className='post__container'>
         <div className='post__date'>{date}</div>


         {image && <img className='post__img' src={image} alt="img" />}

         <h2 className='post__title'>{title}</h2>
         <div className='post__text'>{description}</div>

      </li>
   )
}

export default Post
