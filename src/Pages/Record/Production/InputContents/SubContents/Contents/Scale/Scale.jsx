import React, { useCallback, useEffect, useState } from 'react'
import styles from "./Scale.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { SubInputText } from '../../../../../../../Template'
import { recordProductionAction } from '../../../../../../../reducks/record/production/actions'

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
    dispatch(recordProductionAction({
      ...production,
      ...{scale:event.target.value}
    }))
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
