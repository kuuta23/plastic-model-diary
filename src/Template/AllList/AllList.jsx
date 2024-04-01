import React from 'react'
import styles from "./AllList.module.css"
import uploadDateAsc from '../functions/uploadDateAsc';
import Production from './Production/Production';
import Comment from './Comment/Comment';
import { useSelector } from 'react-redux';

const AllList = (
    {
        productionList=[
      ],
        commentList=[
      ]
    }
) => {
  const productions=useSelector(state=>state.productions)
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
          }
        })
      }
    </div>
  )
}

export default AllList
