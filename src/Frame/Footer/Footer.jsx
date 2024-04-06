import React from 'react'
import styles from "./Footer.module.css"
import MainButton from './MainButton/MainButton'
import { useNavigate } from 'react-router-dom';
import Home from './Contents/Home/Home';
import Profile from './Contents/Profile/Profile';
import List from './Contents/List/List';

const Footer = () => {
  const navigate=useNavigate();
  const onClick=()=>{
    navigate("/Record/Comment")
  }
  return (
    <div
    className={styles.Frame}>
      <div
      className={styles.MainButton}>
      <MainButton
      onClick={onClick}/>
      </div>
      
      <div
      className={styles.SubContent}>
        <Home/>
        <Profile/>
        <List/>
    
      </div>
      
    </div>
  )
}

export default Footer
