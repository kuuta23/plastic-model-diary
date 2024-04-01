import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SubInputText, overString } from '../../../../../../../Template';
import { recordProductinColorAction, recordProductionAction } from '../../../../../../../reducks/record/production/actions';
import { recordProductionErrorResetAction, recordProdutionErrorAction } from '../../../../../../../reducks/error/record/productions/actions';

const Color = () => {
  const profile=useSelector(state=>state.profile);
  const dispatch=useDispatch()
  const production=useSelector(state=>state.recordProduction)
  const [color,setColor]=useState("")
  useEffect(()=>{
    setColor(production.color)
  },[])
  const inputColor=useCallback((event)=>{
    setColor(event.target.value);
    dispatch(recordProductinColorAction(event.target.value))
  },[])
  return (
    <div>
      <SubInputText
      value={color}
      onChange={inputColor}
      limit={30}
      name='color'
      listName='colorList'
      listValue={profile.color}
      placeholder='カラー'
      overValue={true}/>
    </div>
  )
}

export default Color
