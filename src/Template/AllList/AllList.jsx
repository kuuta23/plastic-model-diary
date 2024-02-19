import React from 'react'
import styles from "./AllList.module.css"
import uploadDateAsc from '../functions/uploadDateAsc';
import { type } from '@testing-library/user-event/dist/type';
import Production from './Production/Production';
import Comment from './Comment/Comment';

const AllList = (
    {
        productionList=[
      ],
        commentList=[
      ]
    }
) => {
  const mixList=productionList.concat(commentList)
  const ascList=uploadDateAsc(mixList)
  
  return (
    <div
    className={styles.Frame}>
      {
        ascList.map((value,key)=>{
          if(value.type=="production"){
            return(
              <Production
              key={key}
              value={value}/>
            )  
          }else{
            return(
              <Comment
              key={key}
              value={value}/>
            )
          }
        })
      }
    </div>
  )
}

export default AllList
