// ユーザーのサインイン・サインアップ・サインアウトをするための文字表示

import React from 'react'
import styles from "./Login.module.css"

const Login = () => {
  return (
    <div
    className={styles.Frame}>
      <span
      className={styles.Font}>
        サインイン
      </span>
    </div>
  )
}

export default Login
