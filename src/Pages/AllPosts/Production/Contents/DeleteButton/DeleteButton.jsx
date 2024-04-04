import React from 'react'
import styles from "./DeleteButton.module.css"
import { useDispatch } from 'react-redux';
import DisplayDeleteButton from '../../../../../Template/DeleteButton/DeleteButton';
import deleteProduction from '../../../../../reducks/productions/operations/deleteProduction';

const DeleteButton = ({id}) => {
  const dispatch=useDispatch();
  const onClick=()=>{
    console.log(id);
    dispatch(deleteProduction(id))
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
