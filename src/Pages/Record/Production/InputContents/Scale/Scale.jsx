import React from 'react'
import styles from "./Scale.module.css"
import { useSelector } from 'react-redux'
import { SubInputText } from '../../../../../Template'

const Scale = ({value="",limit,onChange}) => {
    const recordError=useSelector(state=>state.recordError)
    const profile=useSelector(state=>state.profile)

  return (
    <div
    className={styles.Frame}>
      <SubInputText
      value={value}
      onChange={onChange}
      limit={limit}
      placeholder='スケール'
      name='scale'
      listName='scaleList'
      listValue={profile.scale}
      warningTextList={["未入力の場合は、「不明」になります。"]}
      overValue={recordError.scaleOver}/>
    </div>
  )
}

export default Scale
