import React from 'react'
import styles from "./InputEmail.module.css"

const InputEmail = () => {
  return (
    <label htmlFor="">
        <input
        className={styles.Input} 
        type="email" 
        name="userEmail" 
        id="" />
    </label>
  )
}

export default InputEmail
