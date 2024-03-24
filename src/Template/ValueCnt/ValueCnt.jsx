import React from 'react'
import styles from "./ValueCnt.module.css"

const ValueCnt = ({limit=1,valueCnt=0}) => {
    if(valueCnt<=limit){
        return (
            <div
            style={{"color":"black"}}
            className={styles.Frame}>
              <span>{valueCnt}</span><span>/</span><span>{limit}</span>
            </div>
          )
    }else{
        return (
            <div
            style={{"color":"red"}}
            className={styles.Frame}>
              <span>{valueCnt}</span><span>/</span><span>{limit}</span>
            </div>
          )
    }
  
}

export default ValueCnt
