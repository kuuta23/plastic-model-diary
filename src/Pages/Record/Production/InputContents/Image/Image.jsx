import React, { useCallback, useEffect, useState } from 'react'
import { DisplayImage, Error, InputImage, ValueCnt, overList } from '../../../../../Template'
import styles from "./Image.module.css"
import { useDispatch, useSelector } from 'react-redux';
import {  recordProductionImagesAction } from '../../../../../reducks/record/production/actions';
import { recordProductionErrorResetAction, recordProdutionErrorAction } from '../../../../../reducks/error/record/productions/actions';

const Image = () => {
  const [imagesUrl,setImagesUrl]=useState([]),
        [imageFiles,setImageFiles]=useState([]);
  const dispatch=useDispatch();
  const production=useSelector(state=>state.recordProduction);
  const limit=7;



  // imagesに変更があったときに  
  const changeUrl=(files)=>{
    const imagesUrl=[];
    for(let i=0;i<files.length;i++){
      imagesUrl.push(window.URL.createObjectURL(files[i]))
    }
    setImagesUrl(imagesUrl)

  }

  // 初期値
  useEffect(()=>{
    setImageFiles(production.images);
    changeUrl(production.images)
  },[])

  // 入力時
  const inputImage=(event)=>{
    setImageFiles(Array.from(event.target.files));
    changeUrl(Array.from(event.target.files));
    dispatch(recordProductionImagesAction(Array.from(event.target.files)));

  }
  // 削除
  const deleteImage=(i)=>{
    imageFiles.splice(i,1);
    setImageFiles(imageFiles)
    changeUrl(imageFiles)
    dispatch(recordProductionImagesAction(imageFiles));
  }

  return (
    <div
    className={styles.Frame}>
      <DisplayImage
      imageUrlList={imagesUrl}
      deleteClick={deleteImage}/>
      <div
      className={styles.Count}>
        <ValueCnt
        limit={limit}
        valueCnt={imageFiles.length}/>
      </div>

      <div
      className={styles.Button}>
        <InputImage
        onChange={inputImage}/>
      </div>
      
      {
        overList(imageFiles,limit) ?(
          <div
          className={styles.Error}>
          <Error
          overValue={true}/>
          </div>
          
        ):(
          <></>
        )
      }
      
      
    </div>
  )
}

export default Image
