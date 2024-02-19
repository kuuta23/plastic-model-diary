import React from 'react'
import styles from "./Name.module.css"

const Name = ({
    name="",
    onClick
}) => {
  return (
    <div
    className={styles.Frame}
    onClick={onClick}>
      {name}
    </div>
  )
}

export default Name
