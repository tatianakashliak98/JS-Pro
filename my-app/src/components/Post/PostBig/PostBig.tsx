import React, { FC } from 'react'
import { IPost } from '../../PostList/PostList'
import "./style.css"

const PostBig: FC<IPost> = ({ title, date, image, description, id }) => {
   return (
      <li  className='post__container-big'>
         {image && <img className='post-big__img' src={image} alt="img" />}
         <div className='post__date'>{date}</div>
         <h2 className='post__title-big'>{title}</h2>
         <div className='post__text-big'>{description}</div>

      </li>
   )
}

export default PostBig
