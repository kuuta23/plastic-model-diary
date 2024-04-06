import React, { useCallback, useState } from 'react'
import { SearchBox } from '../../../../../Template'
import { useDispatch, useSelector } from 'react-redux'
import { searchScaleAction } from '../../../../../reducks/search/production/actions'

const Scale = () => {
  const dispatch=useDispatch()
  const profile=useSelector(state=>state.profile)
  const radio=profile.scale
  const [scale,setScale]=useState("");
  const inputScale=useCallback((event)=>{
    setScale(event.target.value)
    dispatch(searchScaleAction(event.target.value))
  },[setScale])
  return (
    <div>
      <SearchBox
      title='スケール'
      id='scale'
      radioName='scale'
      values={radio}
      onChange={inputScale}/>
    </div>
  )
}

export default Scale
