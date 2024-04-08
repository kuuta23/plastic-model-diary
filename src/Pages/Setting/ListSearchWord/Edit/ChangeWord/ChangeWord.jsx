import React, { useState } from 'react'
import styles from "./ChangeWord.module.css"
import ValueCnt from '../../../../../Template/ValueCnt/ValueCnt'
import {useParams,useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { profileAction } from '../../../../../reducks/profile/actions';
import changeWord from '../../../../../reducks/profile/operations/changeWord';

const ChangeWord = () => {
  const [value,setValue]=useState("")
  const dispatch=useDispatch()
  const {word,type}=useParams();
  const navigate=useNavigate()
  const onSubmit=(event)=>{
    event.preventDefault()
    dispatch(changeWord(word,value,type))
    navigate("/Setting/Searchwords")
  }
  const inputValue = (event)=>{
    setValue(event.target.value)  
  }
  return (
    <div
    className={styles.Frame}>
      <span
      className={styles.Sub}>
        変更
      </span>
      <div>
        変更を行うと変更前でこのアカウントで入力したワードが全て変更されます
      </div>
      <form
      onSubmit={onSubmit}>
        <input
        className={styles.Input}
        type='text'
        onChange={inputValue}/>
        <div
        className={styles.Cnt}>
          <ValueCnt
          limit={30}
          valueCnt={[...value].length}/>
        </div>
        <input 
        className={styles.Submit}
        type="submit" value="変更" />
        
      </form>
      
    </div>
  )
}

export default ChangeWord
