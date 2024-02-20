import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectorProduction } from '../../reducks/production/operations/selectorProduction';
import { useParams } from 'react-router-dom';
import { Comment, Photo, ProductionName, UserName } from './Contents';
import styles from "./Production.module.css"

const Production = () => {
    const {id}=useParams()
    const dispatch=useDispatch();
    const production=useSelector(state=>state.production)
    console.log(id);
    console.log(production);
    useEffect(()=>{
        dispatch(selectorProduction(id))
        
    },[])
  return (
    <div>
        <div
        className={styles.ProductionName}>
          <ProductionName/>
        </div>
        <div
        className={styles.UserName}>
            <UserName/>
        </div>
        <div
        className={styles.Comment}>
          <Comment/>
        </div>
        <div>
          <Photo/>
        </div>
        
      
    </div>
  )
}

export default Production
