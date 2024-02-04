import React from 'react'
import styles from './ProductionComment.module.css'
import { newLineCount } from '../../../functions/newLineCount'

const ProductionComment = ({comment}) => {
    const array=newLineCount(comment);

  return (
    <div
    className={styles.Frame}>
        {
            array.map((value,key)=>(
                <p
                key={key}
                className={styles.Text}>{value}</p>
            ))
        }
    </div>
    
  )
}

export default ProductionComment
