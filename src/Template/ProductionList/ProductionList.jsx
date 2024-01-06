import React from 'react'
import styles from "./ProductionList.module.css"
import Production from './Production/Production'

const ProductionList = ({productionList=[]}) => {
  return (
    <div
    className={styles.Frame}>
      {
        productionList.map(({name},key)=>(
            <Production
            name={name}/>
        ))
      }
    </div>
  )
}

export default ProductionList
