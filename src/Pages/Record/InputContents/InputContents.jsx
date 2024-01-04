import React from 'react'
import { Enter, ProductionName } from '.'
import styles from "./InputContents.module.css"

const InputContents = () => {
  return (
    <div
    className={styles.Frame}>
      <form action="">
        <div
        className={styles.ProductionName}>
            <ProductionName/>
        </div>
        <div
        className={styles.Enter}>
            <Enter/>
        </div>
        
      </form>
    </div>
  )
}

export default InputContents
