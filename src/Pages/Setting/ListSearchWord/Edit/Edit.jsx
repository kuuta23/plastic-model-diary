import React from 'react'
import styles from "./Edit.module.css"
import AfterWord from './AfterWord/AfterWord'
import {useParams} from "react-router-dom"
import ChangeWord from './ChangeWord/ChangeWord'


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
        <div
        className={styles.ChangeWord}>
            <ChangeWord/>
        </div>
    </div>
  )
}

export default Edit
