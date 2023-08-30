import React,{useState,useEffect} from 'react'
import PostBig from '../Post/PostBig/PostBig';
import { IPost } from '../PostList/PostList';
import PostMiddle from '../Post/PostMiddle/PostMiddle';
import "./style.css"

const SelectedPost = () => {
   const [posts, setPosts] = useState<IPost[]>([]);


   const backFunc = () => {
     fetch('https://studapi.teachmeskills.by/blog/posts/?limit=11')
       .then((response) => response.json())
       .then((data) => {
         setPosts(data.results);
 
       })
       .catch((err) => {
         console.log(err.message)
       });
   };
   useEffect(() => {
     return backFunc
   }, [])
   return (
 
     <div className='post__selected'>
       {
         Array.isArray(posts) && posts.map(({ id, date, title, description, image }) => id === 1 ?
           <PostMiddle  key={id} id={id} date={date} title={title} description={description} image={image} /> : '')
 
       }
     </div>
 
 
 
 
   )
}

export default SelectedPost
