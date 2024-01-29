import React from 'react'
import styles from "./EditButton.module.css"
const EditButton = ({onClick}) => {
  return (
    <div
    className={styles.Frame}>
      <button
      className={styles.Button}
      onClick={onClick}>
        編集
      </button>
    </div>
  )
}

export default EditButton
