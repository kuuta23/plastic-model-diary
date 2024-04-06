// ログインで用いる共通のデザイン

import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import styles from "./Login.module.css"
import { useSelector } from 'react-redux'
import GoogleSigIn from './GoogleSignIn/GoogleSigIn'

const Login = () => {
  const userError=useSelector(state=>state.userError);
  const user=useSelector(state=>state.user)
  console.log(user);
  return (
    <div
    className={styles.Frame}>
      <div
      className={styles.ErrorMessage}>
        {
          userError.userError?(
            <span>メールアドレスかパスワードが異なっているか存在しない可能性があります。</span>
          ):(<></>)
        }
        
      </div>
      <Outlet/>
      <div
      className={styles.Google}>
        <GoogleSigIn/>
      </div>
      
    </div>
  )
}

export default Login
