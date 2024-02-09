// サイドバーの位置と大きさを指定
import React from 'react'
import styles from './Sidebar.module.css'
import MainButton from './MainButton/MainButton'
import Contents from './Contents/Contents'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { recordErrorResetAction } from '../../reducks/error/record/actions'

const Sidebar = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch()
  const onClick=()=>{
    dispatch(recordErrorResetAction())
    navigate("/Record/Comment")
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
