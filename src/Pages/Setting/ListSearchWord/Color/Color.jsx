import React from 'react'
import styles from "./Color.module.css"
import Text from '../Text/Text'
import { useDispatch, useSelector } from 'react-redux'

const Color = () => {
    const profile =useSelector(state=>state.profile)
    const color=profile.color
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
                text={value}/>
            ))
        }
        
    </div>
  )
}

export default Color
