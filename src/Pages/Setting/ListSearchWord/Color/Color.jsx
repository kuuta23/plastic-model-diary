import React, { useCallback } from 'react'
import { useNavigate } from "react-router-dom"
import styles from "./Color.module.css"
import Text from '../Text/Text'
import { useDispatch, useSelector } from 'react-redux'

const Color = () => {
    const navigate=useNavigate()
    const profile =useSelector(state=>state.profile)
    const color=profile.color
    const clickWord=useCallback((word)=>{
        navigate("Edit/color/"+word)
    },[])
  return (
    <div
    className={styles.Frame}>
        <div
        className={styles.Content}>
            カラー
        </div>
        {
            color.map((value,key)=>(
                <Text
                key={key}
                text={value}
                onClick={()=>clickWord(value)}/>
            ))
        }
        
    </div>
  )
}

export default Color
