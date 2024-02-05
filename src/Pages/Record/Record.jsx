import React, { useEffect } from 'react'
import styles from './Record.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { resetLoadingAction } from '../../reducks/loading/actions'
import SendInput from './SendInput/SendInput'

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
      <SendInput/>
      <Outlet/>
      
    </div>
  )
}

export default Record
