import React from 'react'
import styles from "./DeleteButton.module.css"

const DeleteButton = ({onClick}) => {
  return (
    <div
    className={styles.Frame}>
      <button
      className={styles.Button}
      onClick={onClick}>削除</button>
    </div>
  )
}

export default DeleteButton
