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
      <Situation
      situation={value.situation}/>
      <div
      className={styles.UserName}>
        <UserName
        name={value.userName}/>  
      </div>
      <div
      className={styles.ProductionName}>
        <ProductionName
        name={value.productionName}/>
      </div>
      <div
      className={styles.Comment}>
        <Comment
        comment={value.comment}/>
      </div>
      <div
      className={styles.Image}>
        <Image
        imageUrl={value.photoUrl}/>
      </div>
      <div
      className={styles.Detail}>
        <Detail
        value={value}/>
      </div>
      
      
    </div>
  )
}

export default Production
