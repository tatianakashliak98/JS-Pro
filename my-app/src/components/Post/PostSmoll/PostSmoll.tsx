import React, { FC } from 'react'
import { IPost } from '../../PostList/PostList'
import "./style.css"

const PostSmoll: FC<IPost> = ({ title, date, image, id }) => {
   return (

      <li  className='post__container-smoll'>
         {image && <img className='post__img-smoll' src={image} alt="img" /> }
         <div className='post__date'>{date}</div>
         <h4 className='post__title'>{title}</h4>

      </li>

   )
}

export default PostSmoll
