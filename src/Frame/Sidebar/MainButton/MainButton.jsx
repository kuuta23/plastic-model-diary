import React from 'react'
import styles from './MainButton.module.css'

const MainButton = ({onClick}) => {
  return (
    <button
    className={styles.Button}
    onClick={onClick}>
        記録
    </button>
  )
}

export default MainButton
