import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import selectorProductions from '../../reducks/productions/operations/selectorProduction';
import { searchProduction } from '../../Template';
import styles from "./List.module.css"
import SearchBox from './SearchBox/SearchBox';
import { useNavigate } from 'react-router-dom';
import AllPosts from '../AllPosts/AllPosts';
const List = () => {
    return (
      <div
      className={styles.Frame}>
        <div
        className={styles.SearchBox}>
        <SearchBox/>
        </div>
        
        <AllPosts
        local={true}
        filter={true}/>
      </div>
    )
}

export default List
