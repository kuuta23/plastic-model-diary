import React from 'react'
import styles from "./GoogleSignIn.module.css"
import googleSignIn from '../../../reducks/user/operations/googleSignIn'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate} from "react-router-dom"
import { loadingAction } from '../../../reducks/loading/actions';
const GoogleSigIn = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const onCLick=()=>{
        dispatch(loadingAction())
        dispatch(googleSignIn())
        navigate("/")
    }
  return (
    <div
    className={styles.Frame}>
      <button
      className={styles.Button}
      type='button'
      onClick={onCLick}>Googleでログイン</button>
    </div>
  )
}

export default GoogleSigIn
