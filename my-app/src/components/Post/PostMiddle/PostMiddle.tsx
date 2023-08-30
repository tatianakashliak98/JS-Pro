import React, { FC } from 'react'
import { IPost } from '../../PostList/PostList'
import "./PostMiddle.css"

const PostMiddle: FC<IPost> = ({ title, date, image, id }) => {
   return (

      <div className='post__container-middle'>
         {image && <img className='post__img-middle' src={image} alt="img" />}
         <div className='post__date'>{date}</div>
         <h2 className='post__title'>{title}</h2>

      </div>

   )
}

export default PostMiddle
