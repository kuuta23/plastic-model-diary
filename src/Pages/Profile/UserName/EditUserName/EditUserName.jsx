import React, { useState } from 'react'
import styles from "./EditUserName.module.css"
import { EditButton, EnterButton } from '../../../../Template'
import { useDispatch } from 'react-redux';
import changeName from '../../../../reducks/profile/operations/changeName';

const EditUserName = () => {
  
  const [name,setName]=useState('');
  const dispatch=useDispatch();
  const onChange=(event)=>{
    setName(event.target.value)
  }
  const onSubmit=(event)=>{
    event.preventDefault();
    dispatch(changeName(name))
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
