import React from 'react'
import styles from "./DeleteButton.module.css"
import { useDispatch } from 'react-redux'
import deleteProduction from '../../../../reducks/productions/operations/deleteProduction';

const DeleteButton = ({id}) => {
  const dispatch=useDispatch();
  const onClick=()=>{
    dispatch(deleteProduction(id))
  }
  return (
    <div
    className={styles.Frame}>
      <button
      className={styles.Button}
      onClick={onClick}>削除</button>
    </div>
  )
}

export default DeleteButton
