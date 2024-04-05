import React, { useCallback, useState } from 'react'
import { SearchBox } from '../../../../../Template'
import { useSelector } from 'react-redux'

const Scale = () => {
  const profile=useSelector(state=>state.profile)
  const radio=profile.scale
  const [scale,setScale]=useState("");
  const inputScale=useCallback((event)=>{
    setScale(event.target.value)
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
