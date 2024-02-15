import React, { useEffect } from 'react'
import styles from "./Production.module.css"
import { ChangeSituation, Comment, DeleteButton, Detail, Image, ProductionName, Situation, UserName } from './Contents'


const Production = (
  {
    id,
    value}) => {
  return (
    <div
    className={styles.Frame}>
      <Situation
      situation={value.situation}/>
      <div
      className={styles.UserName}>
        <UserName
        name={value.userName}
        profileUrl={value.profileUrl}/>  
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
      {
        value.edit ?(
          <>
            <div
            className={styles.DeleteButton}>
              <DeleteButton
              value={value}/>
            </div>
            <div
            className={styles.SituationButton}>
              <ChangeSituation
              value={value}/>
            </div>
          </>
      
        ):(<></>)
      }
      
      
      
    </div>
  )
}

export default Production
