import React from 'react'
import styles from "./Series.module.css"
import { useSelector } from 'react-redux'
import { SubInputText } from '../../../../../../../Template'
const Series = ({value,limit,onChange}) => {
    const recordError=useSelector(state=>state.recordError)
    const profile=useSelector(state=>state.profile)

  return (
    <div
    className={styles.Frame}>
      <SubInputText
      value={value}
      onChange={onChange}
      limit={limit}
      placeholder='シリーズ'
      name='series'
      listName='seriesList'
      listValue={profile.series}
      warningTextList={["未入力の場合は、「不明」になります。"]}
      overValue={recordError.seriesOver}/>
    </div>
  )
}

export default Series
