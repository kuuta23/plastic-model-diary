import React from 'react'
import styles from "./ProductionList.module.css"
import Production from './Production/Production'

const ProductionList = ({productionList=[]}) => {
  return (
    <div
    className={styles.Frame}>
      {
        productionList.map((doc,key)=>(
            <Production
            key={key}
            name={doc.name}/>
        ))
      }
    </div>
  )
}

export default ProductionList
