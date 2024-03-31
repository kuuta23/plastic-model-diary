import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SubInputText, overString } from '../../../../../../../Template';
import { recordProductionAction } from '../../../../../../../reducks/record/production/actions';
import { recordProductionErrorResetAction, recordProdutionErrorAction } from '../../../../../../../reducks/error/record/productions/actions';

const Color = ({limit}) => {
  const profile=useSelector(state=>state.profile);
  const dispatch=useDispatch()
  const production=useSelector(state=>state.recordProduction)
  const [color,setColor]=useState("")
  useEffect(()=>{
    setColor(production.color)
  },[])
  const inputColor=useCallback((event)=>{
    setColor(event.target.value);
    if(overString(color,20)){
      dispatch(recordProdutionErrorAction())
    }else{
      dispatch(recordProductionErrorResetAction())
    }
    dispatch(recordProductionAction({
      ...production,
      ...{color:event.target.value}
    }))
  },[])
  return (
    <div>
      <SubInputText
      value={color}
      onChange={inputColor}
      limit={limit}
      name='color'
      listName='colorList'
      listValue={profile.color}
      placeholder='カラー'
      warningTextList={["未入力の場合は、「不明」になります。"]}
      overValue={true}/>
    </div>
  )
}

export default Color
