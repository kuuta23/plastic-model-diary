import React, { useCallback, useEffect, useState } from 'react'
import { InputComment } from './InputContents'
import styles from "./Comment.module.css"
import Enter from './InputContents/Enter/Enter';
import { useDispatch, useSelector } from 'react-redux';
import { serverTimestamp } from 'firebase/firestore';
import Image from './InputContents/Image/Image';
import { useNavigate } from 'react-router-dom';

const Comment = () => {
  const dispatch=useDispatch()
  const [comment,setComment]=useState(""),
        [imageUrl,setImageUrl]=useState(""),
        [imagefile,setImageFile]=useState();
  const navigate=useNavigate()
  const commentLimit=200;
  useEffect(()=>{
    navigate("/Record/Production")
  },[])
  const inputComment=useCallback((event)=>{
    setComment(event.target.value)
  },[setComment])
  const inputImage=useCallback((event)=>{
    if(!event.target.files[0]){
      setImageFile("")
      setImageUrl("")
    }else{
      const imageObject=window.URL.createObjectURL(event.target.files[0])
      setImageUrl(imageObject)
      setImageFile(event.target.files[0])
    }
  },[setImageFile,setImageUrl])
  const onSubmit=(event)=>{
    event.preventDefault();
    
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
        <div>
          <Image
          onChange={inputImage}
          imageUrl={imageUrl}/>
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
