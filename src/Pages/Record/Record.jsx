import React, { useEffect } from 'react'
import styles from './Record.module.css'
import { Enter } from './InputContents'
import InputContents from './InputContents/InputContents'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Record = () => {
  const navigate=useNavigate();
  const selector=useSelector(state=>state);
  const user=selector.user;

  useEffect(()=>{
    if(!user.isSignedIn){navigate("/Login/SignUp")}
  },[])
  return (
    <div
    className={styles.Frame}>
        <InputContents/>
      
    </div>
  )
}

export default Record
