import React from 'react'
import styles from './InputPassword.module.css'

const InputPassword = ({onChange}) => {
  return (
    <label htmlFor="">
        <input 
        className={styles.Input}
        type="password" 
        name="userPassword" 
        id=""
        onChange={onChange}
        placeholder='パスワード' />
    </label>
  )
}

export default InputPassword
