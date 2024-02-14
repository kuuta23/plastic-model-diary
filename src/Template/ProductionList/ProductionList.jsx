import React from 'react'
import styles from "./ProductionList.module.css"
import Production from './Production/Production'
import { useDispatch } from 'react-redux'
import productionDelete from '../../reducks/saveData/operations/productionDelete'
import { AdsCard } from '../AdsCard/AdsCard'

const ProductionList = ({productionList=[],deleteButton=false,id}) => {
  return (
    <div
    className={styles.Frame}>
      {
        productionList.map((doc,key)=>(
            <Production
            pageId={id}
            userName={doc.userName}
            key={key}
            name={doc.name}
            id={doc.id}
            uid={doc.uid}
            comment={doc.comment}
            deleteButton={deleteButton}
            howToGetProduction={doc.howToGetProduction}
            scale={doc.scale}
            color={doc.color}
            series={doc.series}
            situation={doc.situation}
            photoUrl={doc.photoUrl}/>
        ))
      }
      
    </div>
  )
}

export default ProductionList
