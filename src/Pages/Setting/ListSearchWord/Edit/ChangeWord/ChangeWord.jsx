import React from 'react'
import styles from "./ChangeWord.module.css"

const ChangeWord = () => {
  return (
    <div>
      <span
      className={styles.Sub}>
        変更
      </span>
      <div>
        <input
        className={styles.Input}
        type='text'/>
      </div>
    </div>
  )
}

export default ChangeWord
