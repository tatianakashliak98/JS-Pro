import React, { FC } from 'react'
import { IPost } from '../../PostList/PostList'
import "./PostMiddle.css"

const PostMiddle: FC<IPost> = ({ title, date, image, id ,description}) => {
   return (

      <div id={`${id}`} className='post__container-middle'>
         {image ? <img className='post__img-middle' src={image} alt="img" /> : ""}
         <div className='post__date'>{date}</div>
         <h2 className='post__title'>{title}</h2>
         <div className='post__text-big'>{description}</div>
      </div>

   )
}

export default PostMiddle
