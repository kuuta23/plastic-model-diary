import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from "./Production.module.css"
import SubContents from './InputContents/SubContents/SubContents';
import { Enter, Name, Comment, Image} from '.';


const Production = () => {
  const dispatch=useDispatch()
  const nameValueLimit=30,
        commentValueLimit=200,
        howToGetProductionLimit=30,
        scaleLimit=20,
        colorLimit=20,
        seriesLimit=30,
        imageLimit=10;




  const onSubmit=(event)=>{
    event.preventDefault();

  }
  return (
    <div
    className={styles.Frame}>
      <form 
      onSubmit={onSubmit}>
        <div
        className={styles.ProductionName}>
            <Name
            limit={nameValueLimit}/>
        </div>
        <div
        className={styles.Comment}>
            <Comment
            limit={commentValueLimit}/>
        </div>
        <div
        className={styles.Image}>
          <Image
          imageLimit={imageLimit}/>
        </div>
        <SubContents
          seriesLimit={seriesLimit}
          scaleLimit={scaleLimit}
          colorLimit={colorLimit}
          howTogetProductionLimit={howToGetProductionLimit}/>
        <div
        className={styles.Enter}>
            <Enter/>
        </div>
        
      </form>
    </div>
  )
}

export default Production
