import React, { useEffect } from 'react'
import styles from "./Production.module.css"
import { Comment, Detail, Image, ProductionName, Situation, UserName } from './Contents'


const Production = (
  {
    id,
    value}) => {
  // useEffect(()=>{
  //   const newLineCnt=newLineCount(comment).length;
  //   const element=document
  //   const frame = element.getElementById(pageId+"-production-frame-"+id)
  //   frame.style.height=(180+newLineCnt*24)+"px"

    
  // },[id])
  return (
    <div
    className={styles.Frame}>
      <div
      className={styles.UserName}>
        <Situation
        situation={value.situation}/>
        <UserName
        name={value.userName}/>
        <ProductionName
        name={value.productionName}/>
        <Comment
        comment={value.comment}/>
        <Image
        imageUrl={value.photoUrl}/>
        <Detail/>
      </div>
      
    </div>
  )
}

export default Production
