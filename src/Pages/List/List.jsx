import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import selectorProductions from '../../reducks/productions/operations/selectorProduction';
import { AllList, searchProduction } from '../../Template';
import styles from "./List.module.css"
import SearchBox from './SearchBox/SearchBox';
import { productionsAction } from '../../reducks/productions/actions';
const List = () => {
    const dispatch=useDispatch();
    const user=useSelector(state=>state.user);
    const productions=useSelector(state=>state.productions)
    const profile=useSelector(state=>state.profile)
    const [data,setData]=useState(productions.productions),
          [color,setColor]=useState(""),
          [scale,setScale]=useState("");
    const inputColor=useCallback((event)=>{
      setColor(event.target.value)
    },[setColor])
    const inputScale=useCallback((event)=>{
      setScale(event.target.value)
    },[setScale])
    useEffect(()=>{
      dispatch(selectorProductions(20,true));
    },[])
    useEffect(()=>{
      setData(searchProduction(productions.productions,color,scale))
    },[color,scale])
    return (
      <div
      className={styles.Frame}>
        <div
        className={styles.SearchBox}>
        <SearchBox
        inputColor={inputColor}
        inputScale={inputScale}/>
        </div>
        
        <AllList
        id={"home"}
        userName={profile.name}
        productionList={data}
        deleteButton={false}/>
      </div>
    )
}

export default List
