import React from 'react'
import styles from "./EditUserName.module.css"
import { EditButton } from '../../../../Template'

const EditUserName = () => {
  return (
    <form 
    className={styles.Frame}
    action="">
      <input
      className={styles.Input}
      type="text"
      placeholder='ユーザー名' />
    </form>
      
  )
}

export default EditUserName
