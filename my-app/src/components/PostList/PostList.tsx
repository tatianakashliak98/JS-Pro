import React, { useState, useEffect } from 'react'
import Post from '../Post/Post'
import PostBig from '../Post/PostBig/PostBig';
import PostMiddle from '../Post/PostMiddle/PostMiddle';
import PostSmoll from '../Post/PostSmoll/PostSmoll';
import "./style.css"

export interface IPost {
  image: string,
  text?: string,
  date: string,
  lesson_num?: number,
  title: string,
  author?: number,
  description?: string,
  id: number,
}

const PostList = () => {
  const [posts, setPosts] = useState<IPost[]>([]);




  const getPosts = () => {


    fetch('https://studapi.teachmeskills.by/blog/posts/?limit=11')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.results);

      })
      .catch((err) => {
        console.log(err.message)
      });
  };


  useEffect(() =>
    getPosts,
    [])


  return (

    <div className='posts__container'>
      <>{
        Array.isArray(posts) && posts.map(({ id, date, title, description, image }) => id === 1 ?
          <PostBig key={id} id={id} date={date} title={title} description={description} image={image} /> : '')

      }
      </>
      <div className='posts__container-middle'>{
        Array.isArray(posts) && posts.map(({ id, date, title, image }) => (id <= 5 && id > 1) ?
          <PostMiddle key={id} id={id} date={date} title={title} image={image} /> : '')
      }
      </div>
      <div className='posts__container-smoll'>{
        Array.isArray(posts) && posts.map(({ id, date, title, image }) => (id >= 6) ?
          <PostSmoll key={id} id={id} date={date} title={title} image={image} /> : '')
      }
      </div>
    </div>




  )
}

export default PostList
