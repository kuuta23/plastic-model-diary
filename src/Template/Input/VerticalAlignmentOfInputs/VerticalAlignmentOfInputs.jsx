// 入力を縦に並べる
import React from 'react'
import styles from './VerticalAlignmentOfInputs.module.css'

const VerticalAlignmentOfInputs = ({children}) => {
  return (
    <div
    className={styles.Frame}>
      {
        children.map((value,key)=>(
            <div
            className={styles.Input}
            key={key}>
                {value}
            </div>
        ))
      }
    </div>
  )
}

export default VerticalAlignmentOfInputs
