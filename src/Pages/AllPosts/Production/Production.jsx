import React, { useEffect } from 'react'
import styles from "./Production.module.css"
import { UploadDate, Comment, DeleteButton, Detail, Image, ProductionName, Situation, UserName } from './Contents'


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
      className={styles.UploadDate}>
        <UploadDate
        timestamp={value.uploadDate}/>
      </div>
      <div
      className={styles.UserName}>
        <UserName
        name={value.userName}
        profileUrl={value.profileUrl}/>  
      </div>
      <div
      className={styles.ProductionName}>
        <ProductionName
        name={value.name}
        to={value.productionUrl}/>
      </div>
      
      <div
      className={styles.Image}>
        <Image
        image={value.image}
        images={value.images}/>
      </div>
      
      <div
      className={styles.Detail}>
        <Detail
        series={value.series}
        color={value.color}
        howToGet={value.howToGet}
        scale={value.scale}/>
      </div>
      <div
      className={styles.Comment}>
        <Comment
        comment={value.comment}/>
      </div>
      {
        value.edit ?(
          <>
            <div
            className={styles.DeleteButton}>
              <DeleteButton
              id={value.id}/>
            </div>
            {/* <div
            className={styles.SituationButton}>
              <ChangeSituation
              value={value}/>
            </div> */}
          </>
      
        ):(<></>)
      }
      
      
      
    </div>
  )
}

export default Production
