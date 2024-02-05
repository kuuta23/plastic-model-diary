import React from 'react'
import { useSelector } from 'react-redux'
import { Error, ValueCnt } from '../../../../Template';
import { limit } from 'firebase/firestore';

const Color = ({onChange,valueCnt,limit}) => {
  const profile=useSelector(state=>state.profile);
  const recordError=useSelector(state=>state.recordError);
  const color=profile.color
  return (
    <div>
      <label htmlFor="">
        <input 
        type="text"
        name='color'
        list='colorList' 
        onChange={onChange}
        placeholder='カラー'/>
        <datalist
        id='colorList'>
          {
            color?(
            
              color.map((value,key)=>(
                <option value={value} key={key}></option>
              ))
            ):<></>
          }
        </datalist>
      </label>
      <ValueCnt
      valueCnt={valueCnt}
      limit={limit}/>
      <div>未入力の場合は、「不明」になります。</div>
      <Error
      overValue={recordError.howToGetProductionOverValue}/>
    </div>
  )
}

export default Color
