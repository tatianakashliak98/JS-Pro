import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { ACTIVATE_USER } from '../../actions/action';
import PageTemplate from '../PageTemplate/PageTemplate';

const ActivateUser = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const { uid, token } = useParams();
  const navigate = useNavigate()
   useEffect(() => {
      if(uid && token) dispatch(ACTIVATE_USER(navigate,uid,token))
   },[uid,token])

  return (
    <PageTemplate title='Activate User'>
      <div>
        Activate User
      </div>
    </PageTemplate>
  )
}

export default ActivateUser