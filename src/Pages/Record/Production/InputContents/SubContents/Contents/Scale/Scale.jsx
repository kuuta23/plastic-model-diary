import React, { useCallback, useEffect, useState } from 'react'
import styles from "./Scale.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { SubInputText, overString } from '../../../../../../../Template'
import { recordProductinScaleAction, recordProductionAction } from '../../../../../../../reducks/record/production/actions'
import { recordProductionErrorResetAction, recordProdutionErrorAction } from '../../../../../../../reducks/error/record/productions/actions'

const Scale = ({value="",limit,onChange}) => {
  const profile=useSelector(state=>state.profile);
  const production=useSelector(state=>state.recordProduction)
  const [scale,setScale]=useState("");
  const dispatch=useDispatch();
  useEffect(()=>{
    setScale(production.scale)
  },[])
  const inputScale=useCallback((event)=>{
    setScale(event.target.value);
    if(overString(20)){
      dispatch(recordProdutionErrorAction())
    }else{
      dispatch(recordProductionErrorResetAction())
    }
    dispatch(recordProductinScaleAction(event.target.value))
  },[])
  return (
    <div
    className={styles.Frame}>
      <SubInputText
      value={scale}
      onChange={inputScale}
      limit={limit}
      placeholder='スケール'
      name='scale'
      listName='scaleList'
      listValue={profile.scale}
      warningTextList={["未入力の場合は、「不明」になります。"]}/>
    </div>
  )
}

export default Scale
