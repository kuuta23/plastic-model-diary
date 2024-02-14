import React from 'react'
import { CommentCont, DeleteButton, Image, UserName } from './Contents'
import styles from "./Comment.module.css"

const Comment = ({value}) => {
  console.log(value);
  return (
    <div
    className={styles.Frame}>
      <UserName
      userName={value.name}/>
      <CommentCont
      comment={value.comment}/>
      <Image
      imageUrl={value.photoUrl}/>
      {
        value.edit?(
          <div
          className={styles.DeleteButton}>
            <DeleteButton
            value={value}/>
          </div>
        ):(<></>)
      }
      
      
    </div>
  )
}

export default Comment
