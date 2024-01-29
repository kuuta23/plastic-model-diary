import React from 'react'
import styles from "./Production.module.css"
import ProductionName from './ProductionName/ProductionName'
import DeleteButton from './DeleteButton/DeleteButton'
import { useDispatch } from 'react-redux'
import productionDelete from '../../../reducks/saveData/operations/productionDelete'

const Production = ({name,id}) => {
  const dispatch=useDispatch();
  const onClick=()=>{
    dispatch(productionDelete(id))
  }
  return (
    <div
    className={styles.Frame}>
        <div
        className={styles.ProductionName}>
            <ProductionName
            name={name}/>
        </div>
        <div
        className={styles.DeleteButton}>
          <DeleteButton
          onClick={onClick()}/>
        </div>
      <hr/>
    </div>
  )
}

export default Production
