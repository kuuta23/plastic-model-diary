import React from 'react'
import styles from './Record.module.css'
import { Enter } from './InputContents'
import InputContents from './InputContents/InputContents'

const Record = () => {
  return (
    <div
    className={styles.Frame}>
        <InputContents/>
      
    </div>
  )
}

export default Record
