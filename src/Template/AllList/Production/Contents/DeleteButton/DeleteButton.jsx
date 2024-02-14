import React from 'react'
import styles from "./DeleteButton.module.css"
import { useDispatch, useSelector } from 'react-redux'
import deleteProduction from '../../../../../reducks/productions/operations/deleteProduction';
import DisplayDeleteButton from '../../../../DeleteButton/DeleteButton';

const DeleteButton = ({value}) => {
  const dispatch=useDispatch();
  const onClick=()=>{
    dispatch(deleteProduction(value))
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
