import React from 'react'
import styles from "./Content.module.css"
import { Link } from 'react-router-dom'

const Content = ({value,link}) => {
  return (
    <div
    className={styles.Frame}>
        <Link
        className={styles.Link}
        to={link}>
            {value}
        </Link>
    </div>
  )
}

export default Content
