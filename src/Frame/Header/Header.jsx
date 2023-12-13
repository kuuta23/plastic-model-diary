// ヘッダーの大きさと背景の設定

import React from 'react'
import styles from './Header.module.css'
import Title from './Title/Title'

const Header = () => {
  return (
    <div
    className={styles.Frame}>
      <Title/>
    </div>
  )
}

export default Header
