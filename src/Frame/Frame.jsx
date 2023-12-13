// 画面全体の配置や大きさの指定

import React from 'react'
import styles from './Frame.module.css'
import Header from './Header/Header'

const Frame = () => {
  return (
    <div
    className={styles.Frame}>
      <Header/>
    </div>
  )
}

export default Frame
