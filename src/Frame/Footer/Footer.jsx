import React from 'react'
import styles from "./Footer.module.css"
import MainButton from './MainButton/MainButton'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { recordErrorResetAction } from '../../reducks/error/record/actions';
import Home from './Contents/Home/Home';
import Profile from './Contents/Profile/Profile';

const Footer = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch()
  const onClick=()=>{
    dispatch(recordErrorResetAction())
    navigate("/Record/Comment")
  }
  return (
    <div
    className={styles.Frame}>
      <MainButton
      onClick={onClick}/>
      <div
      className={styles.SubContent}>
        <Home/>
        <Profile/>
    
      </div>
      
    </div>
  )
}

export default Footer
