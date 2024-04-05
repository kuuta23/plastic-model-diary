import React, { useCallback, useState } from 'react'
import styles from "./Color.module.css"
import { InputRadio, SearchBox } from '../../../../../Template'
import { useSelector } from 'react-redux'

const Color = () => {
  const profile=useSelector(state=>state.profile)
  const [color,setColor]=useState("")
  const radio=profile.color
  const inputColor=useCallback((event)=>{
    setColor(event.target.value);
  },[setColor])
  return (
    <div
    className={styles.Frame}>
      <SearchBox
      onChange={inputColor}
      title='カラー'
      radioName='color'
      values={radio}/>
    </div>
  )
}

export default Color
