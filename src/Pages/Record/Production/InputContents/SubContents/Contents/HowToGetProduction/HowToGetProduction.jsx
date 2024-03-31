import React, { useCallback, useEffect, useState } from 'react'
import styles from "./HowToGetProduction.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { SubInputText, overString } from '../../../../../../../Template'
import { recordProductionAction } from '../../../../../../../reducks/record/production/actions'
import { recordProductionErrorResetAction, recordProdutionErrorAction } from '../../../../../../../reducks/error/record/productions/actions'

const HowToGetProduction = ({value="",limit,onChange}) => {
  const profile=useSelector(state=>state.profile)
  const production=useSelector(state=>state.recordProduction)
  const [howToGet,setHowToGet]=useState("")
  const dispatch=useDispatch()
  useEffect(()=>{
    setHowToGet(production.howToGetProduction)
  },[])
  const inputHowToGet=useCallback((event)=>{
    if(overString(howToGet)){
      dispatch(recordProdutionErrorAction())
    }else{
      dispatch(recordProductionErrorResetAction())
    }
    dispatch(recordProductionAction({
      ...production,
      ...{howToGetProduction:event.target.value}
    }))
    setHowToGet(event.target.value)
  },[setHowToGet])


  return (
    <div
    className={styles.Frame}>
      <SubInputText
      value={howToGet}
      onChange={inputHowToGet}
      limit={limit}
      placeholder='入手方法'
      name='howToGetProduction'
      listName='howToGetProductionList'
      listValue={profile.howToGetProduction}
      warningTextList={["未入力の場合は、「不明」になります。"]}/>
    </div>
  )
}

export default HowToGetProduction
