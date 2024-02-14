import React from 'react'
import styles from './ProductionComment.module.css'

const ProductionComment = ({comment}) => {


  return (
    <div
    className={styles.Frame}>
        {comment}
    </div>
    
  )
}

export default ProductionComment
