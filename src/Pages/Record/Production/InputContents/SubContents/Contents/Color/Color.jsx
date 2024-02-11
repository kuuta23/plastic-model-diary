import React from 'react'
import { useSelector } from 'react-redux'
import { SubInputText } from '../../../../../../../Template';

const Color = ({onChange,value="",limit}) => {
  const profile=useSelector(state=>state.profile);
  const recordError=useSelector(state=>state.recordError);
  return (
    <div>
      <SubInputText
      value={value}
      onChange={onChange}
      limit={limit}
      name='color'
      listName='colorList'
      listValue={profile.color}
      placeholder='カラー'
      warningTextList={["未入力の場合は、「不明」になります。"]}
      overValue={recordError.colorOver}/>
    </div>
  )
}

export default Color
