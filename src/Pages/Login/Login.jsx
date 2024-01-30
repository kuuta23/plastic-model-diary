// ログインで用いる共通のデザイン

import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import styles from "./Login.module.css"
import { useSelector } from 'react-redux'

const Login = () => {
  const userError=useSelector(state=>state.userError);
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
    </div>
  )
}

export default Login
