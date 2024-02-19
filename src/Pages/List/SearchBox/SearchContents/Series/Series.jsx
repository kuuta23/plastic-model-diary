import React from 'react'
import { SearchBox } from '../../../../../Template'
import { useSelector } from 'react-redux'

const Series = ({
  onChange
}) => {
  const profile=useSelector(state=>state.profile)
  const radio=profile.series.map((value)=>{
      return{
          display:value,
          output:value
      }
  })
  radio.push(...[{display:"選択なし",output:""}])
  return (
    <div>
      <SearchBox
      title='シリーズ'
      id='series'
      radio={radio}
      radioName='series'
      onChange={onChange}/>
    </div>
  )
}

export default Series
