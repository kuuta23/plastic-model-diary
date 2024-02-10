import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "./SendInput.module.css"

const SendInput = () => {
    const commnetId='comment-link',
          productionId='production-link',
          dairyId='dairy-link';
    const [comment,setComment]=useState(true),
          [production,setProduction]=useState(false),
          [dairy,setDairy]=useState(false);
    useEffect(()=>{
        const commentElement=document.getElementById(commnetId),
              productionElement=document.getElementById(productionId),
              dairyElement=document.getElementById(dairyId);
        elementSend(commentElement,comment);
        elementSend(productionElement,production)
        elementSend(dairyElement,dairy)
    },[comment,production,dairy])
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
        setProduction(false)
        setDairy(false)
        setComment(false)
        if(type=="comment"){
            setComment(true)
        }else if(type=="production"){
            setProduction(true)
        }else if(type=="dairy"){
            setDairy(true)
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
        <div
        className={styles.Production}
        id={dairyId}>
            <Link
            onClick={()=>onClick("dairy")}
            className={styles.Link}
            to={"Dairy"}>
            日記
            </Link>
            
        </div>
    </div>
  )
}

export default SendInput
