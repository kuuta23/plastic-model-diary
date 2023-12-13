// ヘッダーの大きさと背景の設定

import React from 'react'
import styles from './Header.module.css'
import Title from './Title/Title'
import Login from './User/Login/Login'

const Header = () => {
  return (
    <div
    className={styles.Frame}>
      <Title/>
      <Login/>
    </div>
  )
}

export default Header
