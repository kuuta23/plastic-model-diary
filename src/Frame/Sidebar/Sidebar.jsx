// サイドバーの位置と大きさを指定
import React from 'react'
import styles from './Sidebar.module.css'
import MainButton from './MainButton/MainButton'
import Contents from './Contents/Contents'

const Sidebar = () => {
  return (
    <div
    className={styles.Frame}>
      <div
      className={styles.Contents}>
        <Contents
        contents={[
          {
            value:"ホーム",
            link:"/"
          },{
            value:"プロフィール",
            link:"/Profile"
          }
        ]}/>
      </div>
      <div
      className={styles.MainButton}>
        <MainButton/>
      </div>
    </div>
  )
}

export default Sidebar
