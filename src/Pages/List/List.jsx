import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import selectorProductions from '../../reducks/productions/operations/selectorProduction';
import { searchProduction } from '../../Template';
import styles from "./List.module.css"
import SearchBox from './SearchBox/SearchBox';
import { useNavigate } from 'react-router-dom';
import AllPosts from '../AllPosts/AllPosts';
const List = () => {
    const dispatch=useDispatch();
    const user=useSelector(state=>state.user),
          productions=useSelector(state=>state.productions),
          profile=useSelector(state=>state.profile),
          myProductions=useSelector(state=>state.myProductions)
    const [data,setData]=useState(productions.productions),
          [color,setColor]=useState(""),
          [scale,setScale]=useState(""),
          [series,setSeries]=useState(""),
          [howToGet,setHowToGet]=useState("");
    const navigate=useNavigate()
    useEffect(()=>{if(!user.isSignedIn){navigate("/Login/SignIn")}},[]);
    const inputColor=useCallback((event)=>{
      setColor(event.target.value)
    },[setColor])
    const inputScale=useCallback((event)=>{
      setScale(event.target.value)
    },[setScale])
    const inputSeries=useCallback((event)=>{
      setSeries(event.target.value)
    },[setSeries])
    const inputHowToGet=useCallback((event)=>{
      setHowToGet(event.target.value)
    },[setHowToGet])
    useEffect(()=>{
      dispatch(selectorProductions(20,true));
    },[])
    useEffect(()=>{
      setData(searchProduction(myProductions.myProductions,color,scale,series,howToGet))
    },[color,scale,series,howToGet])

    return (
      <div
      className={styles.Frame}>
        <div
        className={styles.SearchBox}>
        <SearchBox
        inputColor={inputColor}
        inputScale={inputScale}
        inputSeries={inputSeries}
        inputHowToGet={inputHowToGet}/>
        </div>
        
        <AllPosts/>
      </div>
    )
}

export default List
