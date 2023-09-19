import React, { useState, useEffect } from 'react'
import { IPost } from '../PostList/PostList';
import "./style.css"
import { Routes, Route, Link, NavLink, useNavigate, useLocation, useParams, Navigate } from "react-router-dom";
import Post from '../../components/Post/Post';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '../../components/Modal/Modal';


const SelectedPost = () => {
  const { state } = useLocation()
  const modalInfo = useSelector(({ modalInfo }) => modalInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  console.log(state.id)
  return (

    <PageTemplate title=''>
      <div
        // onClick={() => dispatch({ type: 'TOGGLE_MODAL', payload: state.id })}
        className='post__selected'>
        <Post customClass='post-container__selected' key={state.id} id={state.id} date={state.date}
          title={state.title} description={state.description} image={state.image} />
        <div className='post__selected-nav'>
          <button className='post-selected__button'>️← Prev</button>
          <button className='post-selected__button'>Next →</button>
        </div>
      </div>
      {
        modalInfo.isOpen === true && <Modal />
      }
    </PageTemplate>




  )
}

export default SelectedPost
