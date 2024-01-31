import React from 'react'
import styles from "./ProductionList.module.css"
import Production from './Production/Production'
import { useDispatch } from 'react-redux'
import productionDelete from '../../reducks/saveData/operations/productionDelete'
import { AdsCard } from '../AdsCard/AdsCard'

const ProductionList = ({productionList=[],deleteButton=false}) => {
  return (
    <div
    className={styles.Frame}>
      {
        productionList.map((doc,key)=>(
            <Production
            userName={doc.userName}
            key={key}
            name={doc.name}
            id={doc.id}
            uid={doc.uid}
            deleteButton={deleteButton}/>
        ))
      }
      <div
      className={styles.Afirieit}>
      <AdsCard/>
      </div>
      
    </div>
  )
}

export default ProductionList
