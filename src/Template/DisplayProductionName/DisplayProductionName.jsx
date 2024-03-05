import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from "./DisplayProductionName.module.css"

const ProductionName = ({
    name="name",
    to=""
}) => {
    const navigate=useNavigate()
  return (
    <div
        className={styles.Font}
      onClick={()=>navigate(to)}>
        {name}
      </div>
  )
}

export default ProductionName
