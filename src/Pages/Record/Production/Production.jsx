import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadingAction } from '../../../reducks/loading/actions';
import record from '../../../reducks/record/operations/record';
import styles from "./Production.module.css"
import { Color, Comment, Enter, HowToGetProduction, Name, Series } from './InputContents';
import Scale from './InputContents/Scale/Scale';

const Production = () => {
  const [productionName,setProductionName]=useState(""),
        [productionCommment,setProductionComment]=useState(""),
        [howToGetProduction,setHowToGetProduction]=useState(""),
        [scale,setScale]=useState(""),
        [color,setColor]=useState(""),
        [series,setSeries]=useState("");
  const dispatch=useDispatch()
  const nameValueLimit=30,
        commentValueLimit=200,
        howToGetProductionLimit=30,
        scaleLimit=20,
        colorLimit=20,
        seriesLimit=30;

  const inputProductionName=useCallback((event)=>{
    setProductionName(event.target.value);
  },[setProductionName])
  const inputProductionComment=useCallback((event)=>{
    setProductionComment(event.target.value)
  },[setProductionComment])
  const inputScale=useCallback((event)=>{
    setScale(event.target.value)
  },[setScale])
  const inputHowToGetProduction=useCallback((event)=>{
    setHowToGetProduction(event.target.value)
  },[setHowToGetProduction])
  const inputColor=useCallback((event)=>{
    setColor(event.target.value)
  },[setColor])
  const inputSeries=useCallback((event)=>{
    setSeries(event.target.value)
  },[setSeries])

  const onSubmit=(event)=>{
    event.preventDefault();
    dispatch(loadingAction())
    dispatch(record({
      name:productionName,
      nameValueLimit:30,
      comment:productionCommment,
      commentValueLimit:commentValueLimit,
      howToGetProduction:howToGetProduction,
      howToGetProductionLimit:howToGetProductionLimit,
      scale:scale,
      scaleLimit:scaleLimit,
      color:color,
      colorLimit:colorLimit,
      series:series,
      seriesLimit:seriesLimit
    }))

  }
  return (
    <div
    className={styles.Frame}>
      <form 
      onSubmit={onSubmit}>
        <div
        className={styles.ProductionName}>
            <Name
            value={productionName}
            onChange={inputProductionName}
            limit={nameValueLimit}/>
        </div>
        <div
        className={styles.Comment}>
            <Comment
            onChange={inputProductionComment}
            limit={commentValueLimit}/>
        </div>
        <div
        className={styles.Series}>
            <Series
            value={series}
            onChange={inputSeries}
            limit={seriesLimit}/>
        </div>
        <div
        className={styles.Scale}>
            <Scale
            value={scale}
            onChange={inputScale}
            limit={scaleLimit}/>
        </div>
        <div
        className={styles.Color}>
            <Color
            value={color}
            onChange={inputColor}
            limit={colorLimit}/>
        </div>
        <div
        className={styles.HowToGetProduction}>
            <HowToGetProduction
            value={howToGetProduction}
            onChange={inputHowToGetProduction}
            limit={howToGetProductionLimit}/>
        </div>
        <div
        className={styles.Enter}>
            <Enter/>
        </div>
        
      </form>
    </div>
  )
}

export default Production
