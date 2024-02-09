import React from 'react'
import styles from "./MainButton.module.css"

const MainButton = ({onClick}) => {
  return (
    <div
    className={styles.Frame}>
      <button
      onClick={onClick}
      className={styles.Button}>記録</button>
    </div>
  )
}

export default MainButton
