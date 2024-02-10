import React from 'react'
import styles from"./Submit.module.css"

const Submit = ({value}) => {
  return (
    <label htmlFor="">
        <input 
        className={styles.Submit}
        type="submit" 
        value={value}/>
    </label>
  )
}

export default Submit
