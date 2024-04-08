import React from 'react'
import styles from "./Edit.module.css"
import AfterWord from './AfterWord/AfterWord'
import {useParams} from "react-router-dom"


const Edit = () => {
    const {word}=useParams();
    console.log(word);
  return (
    <div
    className={styles.Frame}>
        <div
        className={styles.AfterWord}>
            <AfterWord/>
        </div>
    </div>
  )
}

export default Edit
