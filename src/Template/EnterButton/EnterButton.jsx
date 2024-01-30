import React from 'react'
import styles from "./EnterButton.module.css"

const EnterButton = () => {
  return (
    <input
    className={styles.Submit}
    type="submit"
    value="決定" />
  )
}

export default EnterButton
