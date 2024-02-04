import React, { useEffect } from 'react'
import styles from "./Production.module.css"
import ProductionName from './ProductionName/ProductionName'
import DeleteButton from './DeleteButton/DeleteButton'
import { useDispatch } from 'react-redux'
import UserName from './UserName/UserName'
import ProductionComment from './ProductionComment/ProductionComment'
import { newLineCount } from '../../functions/newLineCount'
import { legacy_createStore } from 'redux'
import HowTogetProduction from './HowToGetProduction/HowTogetProduction'

const Production = ({name,id,userName,uid,comment,howToGetProduction,deleteButton,pageId}) => {
  useEffect(()=>{
    const newLineCnt=newLineCount(comment).length;
    const element=document
    const frame = element.getElementById(pageId+"-production-frame-"+id)
    frame.style.height=(100+newLineCnt*24)+"px"

    
  },[id])
  return (
    <div
    id={pageId+'-production-frame-'+id}
    className={styles.Frame}>
      <div
      className={styles.UserName}>
        <UserName
        name={userName}/>
      </div>
      <div
      className={styles.ProductionName}>
          <ProductionName
          name={name}/>
      </div>
      {
        comment?(
          <div
          className={styles.ProductionComment}>
            <ProductionComment
            comment={comment}/>
          </div>
        ):<></>
      }
      <div
      className={styles.HowTogetProduction}>
        <HowTogetProduction
        howToGetProduction={howToGetProduction}/>
      </div>
      
      {
        deleteButton?(
          <div
          className={styles.DeleteButton}>
            <DeleteButton
            id={id}
            uid={uid}/>
          </div>
        ):<></>
      }
      
    </div>
  )
}

export default Production
