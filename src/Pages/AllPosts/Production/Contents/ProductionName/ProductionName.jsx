import React from 'react'
import styles from "./ProductionName.module.css"
import DisplayUserName from '../../../../../Template/DisplayUserName/DisplayUserName'
import { DisplayText } from '../../../../../Template'

const ProductionName = ({name,to}) => {
  return (
    <span
    className={styles.Frame}>
      <DisplayText
      name={name}
      to={to}/>     
    </span>
  )
}

export default ProductionName
