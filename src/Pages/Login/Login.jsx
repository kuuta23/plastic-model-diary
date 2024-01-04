// ログインで用いる共通のデザイン

import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import styles from "./Login.module.css"

const Login = () => {
  const [errorMessage,setErrorMessage]=useState(false);
  return (
    <div
    className={styles.Frame}>
      <div
      className={styles.ErrorMessage}>
        {
          errorMessage?(
            <span>メールアドレスかパスワードが異なっているか存在しない可能性があります。</span>
          ):(<></>)
        }
        
      </div>
      <Outlet/>
    </div>
  )
}

export default Login
