import React from 'react'
import styles from "./Text.module.css"

const Text = ({text="ノーマル"}) => {
  return (
    <div
    className={styles.Frame}>
        {text}
    </div>
  )
}

export default Text
