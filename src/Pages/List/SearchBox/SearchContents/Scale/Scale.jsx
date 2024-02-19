import React from 'react'
import { SearchBox } from '../../../../../Template'
import { useSelector } from 'react-redux'

const Scale = ({
    onChange,
}) => {
    const profile=useSelector(state=>state.profile)
    const radio=profile.scale.map((value)=>{
        return{
            display:value,
            output:value
        }
    })
    radio.push(...[{display:"選択なし",output:""}])
  return (
    <div>
      <SearchBox
      title='スケール'
      id='scale'
      radioName='scale'
      radio={radio}
      onChange={onChange}/>
    </div>
  )
}

export default Scale
