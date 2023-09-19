import React, { useEffect } from 'react'
import PageTemplate from '../../components/PageTemplate/PageTemplate'
import Post from '../../components/Post/Post'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_PAGEPOST } from '../../actions/action';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import Modal from '../../components/Modal/Modal';

const PagePost = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const modalInfo = useSelector(({ modalInfo }) => modalInfo);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
   useEffect(() => {
         if(id)dispatch(ADD_PAGEPOST(id));
    }, [id]);
    const pagePost = useSelector(({ pagePost }) => pagePost);
  return (
     <PageTemplate title=''>
      <div onClick={() => dispatch({ type: 'TOGGLE_MODAL', payload: pagePost.id })}>
      <Post customClass='post-container__selected' key={pagePost.id} id={pagePost.id} date={pagePost.date}
          title={pagePost.title} description={pagePost.description} image={pagePost.image} />
        </div>
        
        <div className='post__selected-nav'>
          <button onClick={()=>navigate(`/posts/${(id!==undefined && +id > 1 )? +id-1 : '1'}`)} className='post-selected__button'>️← Prev</button>
          <button onClick={()=>navigate(`/posts/${(id!==undefined && +id > 1 )? +id+1 : '1'}`)} className='post-selected__button'>Next →</button>
      </div>
      {
        modalInfo.isOpen === true && <Modal />
      }
    </PageTemplate>
  )
}

export default PagePost
