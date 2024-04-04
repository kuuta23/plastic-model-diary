import React from 'react'
import styles from './ProductionComment.module.css'
import { DisplayText } from '../../../../../Template'

const ProductionComment = ({comment}) => {


  return (
    <div
    className={styles.Frame}>
        <DisplayText
        text={comment}/>
    </div>
    
  )
}

export default ProductionComment
