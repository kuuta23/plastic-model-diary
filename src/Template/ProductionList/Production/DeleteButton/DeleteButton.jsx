import React from 'react'
import styles from "./DeleteButton.module.css"
import { useDispatch, useSelector } from 'react-redux'
import deleteProduction from '../../../../reducks/productions/operations/deleteProduction';

const DeleteButton = ({id}) => {
  const dispatch=useDispatch();
  const user=useSelector(state=>state.user);
  const onClick=()=>{
    dispatch(deleteProduction(id))
  }
  if(user.isSignedIn){
    return (
      <div
      className={styles.Frame}>
        <button
        className={styles.Button}
        onClick={onClick}>削除</button>
      </div>
    )
  }
  
}

export default DeleteButton
