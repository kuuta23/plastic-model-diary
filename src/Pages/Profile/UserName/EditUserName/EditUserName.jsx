import React from 'react'
import styles from "./EditUserName.module.css"
import { EditButton } from '../../../../Template'

const EditUserName = () => {
  return (
    <div
    className={styles.Frame}>
      <form action="">
        <input
        className={styles.Input}
        type="text"
        placeholder='ユーザー名' />
      </form>
      
    </div>
  )
}

export default EditUserName
