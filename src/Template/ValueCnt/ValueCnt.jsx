import React from 'react'

const ValueCnt = ({limit=1,valueCnt=0}) => {
    if(valueCnt<=limit){
        return (
            <div
            style={{"color":"black"}}>
              <span>{valueCnt}</span><span>/</span><span>{limit}</span>
            </div>
          )
    }else{
        return (
            <div
            style={{"color":"red"}}>
              <span>{valueCnt}</span><span>/</span><span>{limit}</span>
            </div>
          )
    }
  
}

export default ValueCnt
