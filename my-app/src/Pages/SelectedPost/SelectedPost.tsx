import React, { useState, useEffect } from 'react'
import { IPost } from '../PostList/PostList';
import "./style.css"
import { Routes, Route, Link, NavLink, useNavigate, useLocation, useParams, Navigate } from "react-router-dom";
import Post from '../../components/Post/Post';
import PageTemplate from '../../components/PageTemplate/PageTemplate';


const SelectedPost = () => {
  const { state } = useLocation()
  return (

    <PageTemplate title=''>
      <div className='post__selected'>
        <Post customClass='post-container__selected' key={state.id} id={state.id} date={state.date}
          title={state.title} description={state.description} image={state.image} />
        <div className='post__selected-nav'>
          <button className='post-selected__button'>️← Prev</button>
          <button className='post-selected__button'>Next →</button>
        </div>
      </div>
    </PageTemplate>




  )
}

export default SelectedPost
