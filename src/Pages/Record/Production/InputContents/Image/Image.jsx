import React, { useCallback, useEffect, useState } from 'react'
import { DisplayImage, Error, InputImage, ValueCnt } from '../../../../../Template'
import styles from "./Image.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { recordProductionAction } from '../../../../../reducks/record/production/actions';

const Image = ({imageLimit=10}) => {
  const [images,setImages]=useState([]),
        [imagesUrl,setImagesUrl]=useState([]);
  const dispatch=useDispatch();
  const production=useSelector(state=>state.recordProduction);
  
  useEffect(()=>{
    console.log(production.images);
    setImages(production.images)
    for(let i=0;i<production.images.length;i++){
      imagesUrl.push(window.URL.createObjectURL(production.images[i]))
    }
    setImagesUrl(imagesUrl)
  },[])
  
  const inputImage=useCallback((event)=>{
    dispatch(recordProductionAction({
      ...production,
      ...{images:event.target.files},
    }));
    setImagesUrl([])
    for(let i=0;i<event.target.files.length;i++){
      imagesUrl.push(window.URL.createObjectURL(event.target.files[i]))
      images.push(event.target.files[0])
    }
    setImagesUrl(imagesUrl)
  },[setImages])

  return (
    <div
    className={styles.Frame}>
      <DisplayImage
      imageUrlList={imagesUrl}/>
      <div
      className={styles.Count}>
        <ValueCnt
        limit={imageLimit}
        valueCnt={images.length}/>
      </div>

      <div
      className={styles.Button}>
        <InputImage
        onChange={inputImage}/>
      </div>
      
      {
        images.length>imageLimit ?(
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
