// サイドバーの位置と大きさを指定
import React from 'react'
import styles from './Sidebar.module.css'
import MainButton from './MainButton/MainButton'
import Contents from './Contents/Contents'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const navigate=useNavigate();
  const onClick=()=>{
    navigate("/Record")
  }
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
        <MainButton
        onClick={onClick}/>
      </div>
    </div>
  )
}

export default Sidebar
