import React from 'react'
import { useDispatch } from 'react-redux'
import deleteSingleComment from '../../../../../reducks/singleComments/operations/deleteSingleComment';
import DisplayDeleteButton from '../../../../DeleteButton/DeleteButton';

const DeleteButton = ({
    value
}) => {
    const dispatch=useDispatch();
    const onClick=()=>{
        dispatch(deleteSingleComment(value))
        
    }
  return (
    <div>
      <DisplayDeleteButton
      onClick={onClick}/>
    </div>
  )
}

export default DeleteButton
