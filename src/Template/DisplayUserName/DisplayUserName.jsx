import React from 'react'
import styles from "./DisplayUserName.module.css"
import { Link, useNavigate } from 'react-router-dom'

const DisplayUserName = ({userName,to}) => {
  const navigate=useNavigate()
  const onClick=()=>{
    navigate(to)
  }
  return (
    <div
    className={styles.Frame}
    onClick={onClick}>
      {userName}
      
    </div>
  )
}

export default DisplayUserName
