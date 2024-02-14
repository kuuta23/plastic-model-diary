import React from 'react'
import styles from './ProductionComment.module.css'
import DisplayText from '../../../../DisplayText/DisplayText'

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
