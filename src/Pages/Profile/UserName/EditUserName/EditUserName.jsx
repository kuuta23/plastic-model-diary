import React, { useState } from 'react'
import styles from "./EditUserName.module.css"
import { EditButton, EnterButton } from '../../../../Template'
import { useDispatch } from 'react-redux';
import changeName from '../../../../reducks/profile/operations/changeName';
import selectorMyProductions from '../../../../reducks/productions/operations/selectorMyProduction';

const EditUserName = ({submit}) => {
  
  const [name,setName]=useState('');
  const dispatch=useDispatch();
  const onChange=(event)=>{
    setName(event.target.value)
  }
  const onSubmit=(event)=>{
    event.preventDefault();
    dispatch(changeName(name))
    dispatch(selectorMyProductions(true))
    submit()
  }

  return (
    <form 
    className={styles.Frame}
    onSubmit={onSubmit}>
      <input
      className={styles.Input}
      type="text"
      placeholder='ユーザー名'
      onChange={onChange} />
      <div
      className={styles.EnterButton}>
        <EnterButton/>
      </div>
      
    </form>
      
  )
}

export default EditUserName
