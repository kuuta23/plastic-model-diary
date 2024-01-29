import React from 'react'
import styles from "./UserName.module.css"

const UserName = ({name="name"}) => {
  return (
    <div
    className={styles.Frame}>
      {name}
    </div>
  )
}

export default UserName
