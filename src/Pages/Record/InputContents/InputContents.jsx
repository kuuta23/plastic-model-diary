import React, { useCallback, useState } from 'react'
import { Enter, ProductionName } from '.'
import styles from "./InputContents.module.css"

const InputContents = () => {
  const [productionName,setProductionName]=useState("");

  const [productionNameError,setProductionNameError]=useState(false);


  const inputProductionName=useCallback((event)=>{
    setProductionName(event.target.value);
  },[setProductionName])

  const onSubmit=(event)=>{
    event.preventDefault();
    setProductionNameError(!productionNameError)
  }
  return (
    <div
    className={styles.Frame}>
      <form 
      onSubmit={onSubmit}>
        <div
        className={styles.ProductionName}>
            <ProductionName
            error={productionNameError}
            onChange={inputProductionName}/>
        </div>
        <div
        className={styles.Enter}>
            <Enter/>
        </div>
        
      </form>
    </div>
  )
}

export default InputContents
