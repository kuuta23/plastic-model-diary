import React from 'react'
import styles from "./InputEmail.module.css"

const InputEmail = ({onChange}) => {
  return (
    <label htmlFor="">
        <input
        className={styles.Input} 
        type="email" 
        name="userEmail" 
        id=""
        onChange={onChange}
        placeholder='メールアドレス' />
    </label>
  )
}

export default InputEmail
