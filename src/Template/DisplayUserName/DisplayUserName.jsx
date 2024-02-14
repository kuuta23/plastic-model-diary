import React from 'react'
import styles from "./DisplayUserName.module.css"

const DisplayUserName = ({userName}) => {
  return (
    <div
    className={styles.Frame}>
      {userName}
    </div>
  )
}

export default DisplayUserName
