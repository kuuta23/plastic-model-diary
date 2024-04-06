import React, { useCallback, useState } from 'react'
import { SearchBox } from '../../../../../Template'
import { useDispatch, useSelector } from 'react-redux'
import { searchSeriesAction } from '../../../../../reducks/search/production/actions'

const Series = ({
  onChange
}) => {
  const dispatch=useDispatch()
  const profile=useSelector(state=>state.profile)
  const radio=profile.series;
  const [series,setSeries]=useState("")
  const inputSeries=useCallback((event)=>{
    setSeries(event.target.value)
    dispatch(searchSeriesAction(event.target.value))
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
