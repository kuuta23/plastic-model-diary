import React, { useCallback, useEffect, useState } from 'react'
import styles from "./Comment.module.css"
import { Error, ValueCnt, overString } from '../../../../../Template';
import { useDispatch, useSelector } from 'react-redux';
import { recordProductinCommentAction } from '../../../../../reducks/record/production/actions';
import { recordProdutionErrorAction } from '../../../../../reducks/error/record/productions/actions';

const ProductionComment = ({onChange,value="",limit=1}) => {
  const dispatch=useDispatch();
  const production=useSelector(state=>state.recordProduction)
  const [comment,setComment]=useState("");
  useEffect(()=>{
    setComment(production.comment)

  },[])
  const inputComment=useCallback((event)=>{
    setComment(event.target.value)
    dispatch(recordProductinCommentAction(event.target.value))
    if(overString(comment,200)){
      dispatch(recordProdutionErrorAction())
    }else{
      dispatch(recordProdutionErrorAction())
    }
  },[setComment])
  return (
    <div
    className={styles.Frame}>
      <textarea 
      className={styles.Textarea}
      onChange={inputComment}
      value={comment}
      placeholder='コメント'
      name="" 
      id="" 
      cols="30" 
      rows="10"></textarea>
      <ValueCnt
      valueCnt={[...value].length}
      limit={limit}/>
      <Error/>
    </div>
    
  )
}

export default ProductionComment
