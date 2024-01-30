// ユーザーのサインイン・サインアップ・サインアウトをするための文字表示

import React, { useEffect } from 'react'
import styles from "./Login.module.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Login = () =>{
  const user=useSelector(state=>state.user);
  return (
    <div
    className={styles.Frame}>
      {
        user.isSignedIn?(
          <Link
          className={styles.Font}
          to={"/Login/SignOut"}>
            サインアウト
          </Link>
        ):(
          <>
          <Link
          className={styles.Font}
          to={"/Login/SignIn"}>
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
