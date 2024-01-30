import React from 'react'
import styles from "./Production.module.css"
import ProductionName from './ProductionName/ProductionName'
import DeleteButton from './DeleteButton/DeleteButton'
import { useDispatch } from 'react-redux'
import UserName from './UserName/UserName'

const Production = ({name,id,userName,uid}) => {
  return (
    <div
    className={styles.Frame}>
      <div
      className={styles.UserName}>
        <UserName
        name={userName}/>
      </div>
      <div
      className={styles.ProductionName}>
          <ProductionName
          name={name}/>
      </div>
      <div
      className={styles.DeleteButton}>
        <DeleteButton
        id={id}
        uid={uid}/>
      </div>
    </div>
  )
}

export default Production
