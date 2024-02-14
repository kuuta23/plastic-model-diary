import React from 'react'
import styles from "./ProductionName.module.css"

const ProductionName = ({name}) => {
  return (
    <span
    className={styles.Frame}>
      {name}
    </span>
  )
}

export default ProductionName
