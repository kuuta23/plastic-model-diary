import React from 'react'
import styles from "./HowToGetProduction.module.css"
import { useSelector } from 'react-redux'
import { SubInputText } from '../../../../../../../Template'

const HowToGetProduction = ({value="",limit,onChange}) => {
    const recordError=useSelector(state=>state.recordError)
    const profile=useSelector(state=>state.profile)

  return (
    <div
    className={styles.Frame}>
      <SubInputText
      value={value}
      onChange={onChange}
      limit={limit}
      placeholder='入手方法'
      name='howToGetProduction'
      listName='howToGetProductionList'
      listValue={profile.howToGetProduction}
      warningTextList={["未入力の場合は、「不明」になります。"]}
      overValue={recordError.howToGetProductionOverValue}/>
    </div>
  )
}

export default HowToGetProduction
