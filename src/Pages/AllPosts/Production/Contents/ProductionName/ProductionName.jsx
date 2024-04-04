import React from 'react'
import styles from "./ProductionName.module.css"
import DisplayUserName from '../../../../../Template/DisplayUserName/DisplayUserName'
import { DisplayProductionName, DisplayText } from '../../../../../Template'

const ProductionName = ({name,to}) => {
  return (
    <span
    className={styles.Frame}>
      <DisplayProductionName
      name={name}
      to={to}/>     
    </span>
  )
}

export default ProductionName
