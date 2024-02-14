import React from 'react'
import styles from "./AllList.module.css"
import uploadDateAsc from '../functions/uploadDateAsc';
import { type } from '@testing-library/user-event/dist/type';
import Production from './Production/Production';
import Comment from './Comment/Comment';

const AllList = (
    {
        productionList=[{
          type:"production",
          uploadDate:new Date().getTime()
        },
        {
          type:"production",
          uploadDate:new Date()
        }
      ],
        commentList=[
          {
            type:"comment",
            uploadDate:new Date(2000,2,2,2,2)
          },
          {
            type:"comment",
            uploadDate:new Date()
          },
          {
            type:"comment",
            uploadDate:new Date(2000,2,2,2,2)
          },
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
