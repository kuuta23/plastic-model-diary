// ユーザーのサインイン・サインアップ・サインアウトをするための文字表示

import React from 'react'
import styles from "./Login.module.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () =>{
  const [User, setUser] = useState(false);
  return (
    <div
    className={styles.Frame}>
      {
        User?(
          <Link
          className={styles.Font}>
            サインアウト
          </Link>
        ):(
          <>
          <Link
          className={styles.Font}>
            サインイン
          </Link>
          <Link
          className={styles.Font}
          to={"/Login/SignUp"}>
            サインアップ
          </Link>
          </>
        )
      }
      
    </div>
  )
}

export default Login
