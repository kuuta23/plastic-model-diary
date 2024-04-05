import React, { useCallback, useState } from 'react'
import { SearchBox } from '../../../../../Template'
import { useSelector } from 'react-redux'

const Series = ({
  onChange
}) => {
  const profile=useSelector(state=>state.profile)
  const radio=profile.series;
  const [series,setSeries]=useState("")
  const inputSeries=useCallback((event)=>{
    setSeries(event.target.value)
  },[setSeries])
  return (
    <div>
      <SearchBox
      title='シリーズ'
      id='series'
      values={radio}
      radioName='series'
      onChange={inputSeries}/>
    </div>
  )
}

export default Series
