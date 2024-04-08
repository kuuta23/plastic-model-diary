import React from 'react'
import {useParams} from "react-router-dom"
import styles from "./AfterWord.module.css"

const AfterWord = () => {
    const {word}=useParams();
  return (
    <div
    className={styles.Frame}>
      <span
      className={styles.Sub}>
        変更前
      </span>
      <div
      className={styles.Word}>
        {word}
      </div>
    </div>
  )
}

export default AfterWord
