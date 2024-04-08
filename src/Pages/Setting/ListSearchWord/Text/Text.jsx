import React from 'react'
import styles from "./Text.module.css"

const Text = ({text="ノーマル",onClick}) => {
  return (
    <div
    className={styles.Frame}
    onClick={onClick}>
        {text}
    </div>
  )
}

export default Text
