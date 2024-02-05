import React from 'react'
import styles from "./Series.module.css"
import { Error, ValueCnt } from '../../../../Template'
import { useSelector } from 'react-redux'

const Series = ({valueCnt,limit,onChange}) => {
    const recordError=useSelector(state=>state.recordError)
    const profile=useSelector(state=>state.profile)

  return (
    <div
    className={styles.Frame}>
        <input 
        type="text" 
        placeholder='シリーズ'
        name="" 
        id="series"
        list='seresList'
        onChange={onChange}/>
        <datalist
        id='seriesList'>
            {
            profile.series?(
            
              profile.series.map((value,key)=>(
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
        overValue={recordError.seriesOver}/>
    </div>
  )
}

export default Series
