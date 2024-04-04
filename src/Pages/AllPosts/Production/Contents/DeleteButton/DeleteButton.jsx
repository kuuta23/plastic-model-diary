import React from 'react'
import styles from "./DeleteButton.module.css"
import { useDispatch } from 'react-redux';
import deleteMyProduction from '../../../../../reducks/myProductions/operations/deleteMyProduction';
import DisplayDeleteButton from '../../../../../Template/DeleteButton/DeleteButton';

const DeleteButton = ({value}) => {
  const dispatch=useDispatch();
  const onClick=()=>{
    dispatch(deleteMyProduction(value))
  }
  if(true){
    return (
      <div
      className={styles.Frame}>
        <DisplayDeleteButton
        onClick={onClick}/>
      </div>
    )
  }
  
}

export default DeleteButton
