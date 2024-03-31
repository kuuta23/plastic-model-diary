import React, { useCallback, useEffect, useState } from 'react'
import { DisplayImage, Error, InputImage, ValueCnt } from '../../../../../Template'
import styles from "./Image.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { recordProductionAction } from '../../../../../reducks/record/production/actions';

const Image = ({imageLimit=10}) => {
  const [imagesUrl,setImagesUrl]=useState([]),
        [imageFiles,setImageFiles]=useState([]);
  const dispatch=useDispatch();
  const production=useSelector(state=>state.recordProduction);



  // imagesに変更があったときにUrlを変更  
  const changeUrl=(files)=>{
    const imagesUrl=[];
    for(let i=0;i<files.length;i++){
      imagesUrl.push(window.URL.createObjectURL(files[i]))
    }
    setImagesUrl(imagesUrl);
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
    dispatch(recordProductionAction({
      ...production,
      ...{images:Array.from(event.target.files)},
    }));
  }
  
  // 削除
  const deleteImage=(i)=>{
    imageFiles.splice(i,1);
    setImageFiles(imageFiles)
    changeUrl(imageFiles)
    dispatch(recordProductionAction({
      ...production,
      ...{images:imageFiles}
    }));
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
        limit={imageLimit}
        valueCnt={imageFiles.length}/>
      </div>

      <div
      className={styles.Button}>
        <InputImage
        onChange={inputImage}/>
      </div>
      
      {
        imageFiles.length>imageLimit ?(
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
