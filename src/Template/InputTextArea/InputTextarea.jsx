import React from 'react'
import styles from "./InputTextarea.module.css"
import { useSelector } from 'react-redux';
import ValueCnt from '../ValueCnt/ValueCnt';
import Error from '../Error/Error';

const InputTextarea = ({onChange,value="",limit=1,overValue=false,noValue=false,placeholder="",name=""}) => {   
  return (
    <div
    className={styles.Frame}>
      <textarea 
      className={styles.Textarea}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      id="" 
      cols="30" 
      rows="10"></textarea>
      <ValueCnt
      valueCnt={[...value].length}
      limit={limit}/>
      <Error
      overValue={overValue}
      noValue={noValue}/>
    </div>
    
  )
}

export default InputTextarea
