import React, { useEffect } from 'react'
import PageTemplate from '../../components/PageTemplate/PageTemplate'
import { useDispatch, useSelector } from 'react-redux';
import Post from '../../components/Post/Post';
import { FETCH_MY_POSTS } from '../../actions/action';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const MyPosts = () => {
   const MyPosts = useSelector(({ MyPosts }) => MyPosts);
   const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

  useEffect(() => {
    
    dispatch(FETCH_MY_POSTS());
  }, []);
  return (
     <PageTemplate title='My posts'>
        <>
        {Array.isArray(MyPosts) &&
            MyPosts.map(({ id, date, title, description, image,
              likes
            }) =>
               (
                <Post
                  customClass="post-container__left"
                  key={id}
                  id={id}
                  date={date}
                  title={title}
                  description={description}
                  image={image}
                  likes={likes}
                />
              )
            )}
        </>
        
    </PageTemplate>
  )
}

export default MyPosts
