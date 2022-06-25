import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../context/userSlice';
import { getPhotos } from '../../context/photoSlice';
import PropTypes from 'prop-types'
import './sidebar.css';
import { authActions } from '../../context/authSlice';

export const Sidebar = ({typedata}) => {
    const dispatch = useDispatch();
    const [listType, setListType] = useState('');

  const showuser = () => {
    setListType('user');
    typedata('user');
    dispatch(getUsers());
  }

  const showphotos = () => {
    setListType('photos');
    typedata('photos');
    dispatch(getPhotos());
  }

  const SignOut = () => {
    dispatch(authActions.logout())
  }

  return (
    <div className='sidebar__fixed'>
        <div className='sidebar__header'>
            <h2>
                Menu
            </h2>
        </div>
        <ul className='sidebar__user_list'>
        <li className={listType === 'user' ? 'active' : ''} onClick={showuser}>
            User List
        </li>
        <li className={listType === 'photos' ? 'active' : ''} onClick={showphotos}>
            Photos
        </li>
        </ul>
        <ul className='sidebar__user_list self__flex__end'>
          <li onClick={SignOut}>
              Sign out
          </li>
        </ul>
    </div>
  )
}

Sidebar.propTypes = {
  typedata: PropTypes.func
}