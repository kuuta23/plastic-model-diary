// サイドバーの位置と大きさを指定
import React from 'react'
import styles from './Sidebar.module.css'
import MainButton from './MainButton/MainButton'
import Contents from './Contents/Contents'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Sidebar = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch()
  const user = useSelector(state=>state.user)
  const navigetionProfile=()=>{
    if(user.isSignedIn){
      return("/Profile/"+user.uid)
    }else{
      return("/Profile/null")
    }
  }
  const onClick=()=>{
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
            link:navigetionProfile()
          },
          // {
          //   value:"リスト",
          //   link:"/List"
          // }
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
