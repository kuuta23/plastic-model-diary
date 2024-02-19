import React, { useState } from 'react'
import styles from "./Color.module.css"
import { InputRadio, SearchBox } from '../../../../../Template'
import { useSelector } from 'react-redux'

const Color = (
  {
    onChange
  }
) => {
  const profile=useSelector(state=>state.profile)
  const radio=profile.color.map((value)=>{
    return{
      display:value,
      output:value
    }
  })
  radio.push(...[{display:"選択なし",output:""}])
  return (
    <div
    className={styles.Frame}>
      <SearchBox
      onChange={onChange}
      title='カラー'
      radioName='color'
      radio={radio}/>
    </div>
  )
}

export default Color
