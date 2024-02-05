import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "./SendInput.module.css"

const SendInput = () => {
    const commnetId='comment-link',
          productionId='production-link';
    const [comment,setComment]=useState(true),
          [production,setProduction]=useState(false);
    useEffect(()=>{
        const commentElement=document.getElementById(commnetId);
        const productionElement=document.getElementById(productionId)
        elementSend(commentElement,comment);
        elementSend(productionElement,production)
    },[comment,production])
    const elementSend=(element,click)=>{
        
        if(click){
            element.style.paddingBottom='0px'
            element.style.borderBottom="4px"
        }else{
            element.style.paddingBottom='4px'
            element.style.borderBottom="0px"
        }
        element.style.borderBottomColor="black"
        element.style.borderBottomStyle="solid"
        
        
    }
    const onClick=(type)=>{
        if(type=="comment"){
            setComment(true)
            setProduction(false)
        }else if(type=="production"){
            setComment(false)
            setProduction(true)
        }
    }
  return (
    <div
    className={styles.Frame}>
        <div
        className={styles.Comment}
        id={commnetId}
        >
            <Link
            onClick={()=>onClick("comment")}
            className={styles.Link}
            to={"Comment"}>
            コメント
            </Link>
            
        </div>
        <div
        className={styles.Production}
        id={productionId}>
            <Link
            onClick={()=>onClick("production")}
            className={styles.Link}
            to={"Production"}>
            プラモデル
            </Link>
            
        </div>
    </div>
  )
}

export default SendInput
