import React, { useEffect } from 'react'
import styles from './Record.module.css'
import InputContents from './InputContents/InputContents'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resetLoadingAction } from '../../reducks/loading/actions'

const Record = () => {
  const navigate=useNavigate();
  const selector=useSelector(state=>state);
  const dispatch=useDispatch()
  const user=selector.user;

  useEffect(()=>{
    if(!user.isSignedIn){navigate("/Login/SignUp")}
    dispatch(resetLoadingAction())
  },[])
  return (
    <div
    className={styles.Frame}>
        <InputContents/>
      
    </div>
  )
}

export default Record
