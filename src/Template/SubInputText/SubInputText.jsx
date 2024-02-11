import React from 'react'
import styles from './SubInputText.module.css'
import ValueCnt from '../ValueCnt/ValueCnt'
import Error from '../Error/Error'

const SubInputText = (
    {
        value="",
        limit=1,
        placeholder="",
        onChange,
        listName="",
        listValue=[],
        name="null",
        overValue=false,
        noValue=false,
        warningTextList=[]
    }) => {
  return (
    <div
    className={styles.Frame}>
      <label htmlFor="">
        <input 
        type="text"
        name={name}
        list={listName} 
        onChange={onChange}
        placeholder={placeholder}/>
        {
            listName?(
                <datalist
                id={listName}>
                {
                    listValue?(
                    
                    listValue.map((value,key)=>(
                        <option value={value} key={key}></option>
                    ))
                    ):<></>
                }
                </datalist>
            ):<></>
        }
        
      </label>
      <ValueCnt
      valueCnt={[...value].length}
      limit={limit}/>
      <ul
      className={styles.WarningTextList}>
        {
            warningTextList.map((value,key)=>(
                <li
                key={key}
                className={styles.WarningText}>{value}</li>
            ))
        }
      </ul>
      <Error
      overValue={overValue}
      noValue={noValue}/>
    </div>
  )
}

export default SubInputText
