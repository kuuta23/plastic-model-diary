import React from 'react'
import styles from "./UserName.module.css"
import DisplayUserName from '../../../../../Template/DisplayUserName/DisplayUserName'

const UserName = ({name="name",profileUrl}) => {
  return (
    <div
    className={styles.Frame}>
      <DisplayUserName
      userName={name}
      to={profileUrl}/>
    </div>
  )
}

export default UserName
