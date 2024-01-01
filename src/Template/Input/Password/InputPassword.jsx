import React from 'react'
import styles from './InputPassword.module.css'

const InputPassword = () => {
  return (
    <label htmlFor="">
        <input 
        className={styles.Input}
        type="password" 
        name="userPassword" 
        id="" />
    </label>
  )
}

export default InputPassword
