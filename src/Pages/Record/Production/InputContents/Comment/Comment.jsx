import React from 'react'
import styles from "./Comment.module.css"
import { useSelector } from 'react-redux';
import { Error, ValueCnt } from '../../../../../Template';

const ProductionComment = ({onChange,value="",limit=1}) => {
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
      valueCnt={[...value].length}
      limit={limit}/>
      <Error
      overValue={recordError.commentOverValue}/>
    </div>
    
  )
}

export default ProductionComment
