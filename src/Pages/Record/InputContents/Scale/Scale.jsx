import React from 'react'
import styles from "./Scale.module.css"
import { Error, ValueCnt } from '../../../../Template'
import { useSelector } from 'react-redux'

const Scale = ({valueCnt,limit,onChange}) => {
    const recordError=useSelector(state=>state.recordError)
    const profile=useSelector(state=>state.profile)

  return (
    <div
    className={styles.Frame}>
        <input 
        type="text" 
        placeholder='スケール'
        name="" 
        id="scale"
        list='scaleList'
        onChange={onChange}/>
        <datalist
        id='scaleList'>
            {
            profile.scale?(
            
              profile.scale.map((value,key)=>(
                <option value={value} key={key}></option>
              ))
            ):<></>
          }
        </datalist>
        <ValueCnt
        valueCnt={valueCnt}
        limit={limit}/>
        <div>
            未入力の場合、「不明」になります
        </div>
        <Error
        overValue={recordError.scaleOver}/>
    </div>
  )
}

export default Scale
