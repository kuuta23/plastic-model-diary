import React from 'react'
import styles from "./ProductionList.module.css"
import Production from './Production/Production'
import { useDispatch } from 'react-redux'
import productionDelete from '../../reducks/saveData/operations/productionDelete'

const ProductionList = ({productionList=[],onClick}) => {
  return (
    <div
    className={styles.Frame}>
      {
        productionList.map((doc,key)=>(
            <Production
            key={key}
            name={doc.name}
            id={doc.id}/>
        ))
      }
    </div>
  )
}

export default ProductionList
