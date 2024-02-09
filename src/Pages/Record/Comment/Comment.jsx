import React, { useCallback, useState } from 'react'
import { InputComment } from './InputContents'
import styles from "./Comment.module.css"
import Enter from './InputContents/Enter/Enter';
import { useDispatch, useSelector } from 'react-redux';
import commentRecord from '../../../reducks/record/operations/commentRecord';
import { loadingAction } from '../../../reducks/loading/actions';
import { serverTimestamp } from 'firebase/firestore';

const Comment = () => {
  const dispatch=useDispatch()
  const recordError=useSelector(state=>state.recordError)
  const [comment,setComment]=useState("");
  const commentLimit=200;
  const inputComment=useCallback((event)=>{
    setComment(event.target.value)
  },[setComment])
  const onSubmit=(event)=>{
    event.preventDefault();
    dispatch(loadingAction())
    dispatch(commentRecord({
      comment:comment,
      commentLimit:commentLimit,
    }))
    
  }
  return (
    <div>
      <form 
      onSubmit={onSubmit}>
        <div
        className={styles.Comment}>
          <InputComment
          value={comment}
          onChange={inputComment}
          limit={commentLimit}/>
        </div>
        <div
        className={styles.Enter}>
          <Enter/>
        </div>
      </form>
    </div>
  )
}

export default Comment
