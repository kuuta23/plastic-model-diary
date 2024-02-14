import React from 'react'
import { CommentCont, Image, UserName } from './Contents'
import styles from "./Comment.module.css"

const Comment = ({value}) => {
  return (
    <div
    className={styles.Frame}>
      <UserName
      userName={value.name}/>
      <CommentCont
      comment={value.comment}/>
      <Image
      imageUrl={value.photoUrl}/>
    </div>
  )
}

export default Comment
