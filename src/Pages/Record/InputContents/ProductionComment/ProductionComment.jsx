import React from 'react'
import styles from "./ProductionComment.module.css"
import { Error, ValueCnt } from '../../../../Template'
import { useSelector } from 'react-redux';

const ProductionComment = ({onChange,valueCnt=0,limit=1}) => {
    const recordError=useSelector(state=>state.recordError);
  return (
    <div
    className={styles.Frame}>
      <textarea 
      className={styles.Textarea}
      onChange={onChange}
      placeholder='コメント'
      name="" 
      id="" 
      cols="30" 
      rows="10"></textarea>
      <ValueCnt
      valueCnt={valueCnt}
      limit={limit}/>
      <Error
      overValue={recordError.commentOverValue}/>
    </div>
    
  )
}

export default ProductionComment
