import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import selectorProductions from '../../reducks/productions/operations/selectorProduction';
import { ProductionList } from '../../Template';
import styles from "./List.module.css"
import SearchBox from './SearchBox/SearchBox';
const List = () => {
    const dispatch=useDispatch();
    const user=useSelector(state=>state.user);
    const productions=useSelector(state=>state.productions)
    const profile=useSelector(state=>state.profile)
    useEffect(()=>{
      dispatch(selectorProductions(20,true));
    },[])
    return (
      <div
      className={styles.Frame}>
        <SearchBox/>
        <ProductionList
        id={"home"}
        userName={profile.name}
        productionList={productions.productions}
        deleteButton={false}/>
      </div>
    )
}

export default List
