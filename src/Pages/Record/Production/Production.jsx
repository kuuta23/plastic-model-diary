import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadingAction } from '../../../reducks/loading/actions';
import styles from "./Production.module.css"
import productionRecord from '../../../reducks/record/operations/productionRecord';
import SubContents from './InputContents/SubContents/SubContents';
import { Enter, Name, Comment, Image} from '.';


const Production = () => {
  const [productionName,setProductionName]=useState(""),
        [productionCommment,setProductionComment]=useState(""),
        [howToGetProduction,setHowToGetProduction]=useState(""),
        [scale,setScale]=useState(""),
        [color,setColor]=useState(""),
        [series,setSeries]=useState(""),
        [situation,setSituation]=useState(),
        [images,setImages]=useState([]),
        [imagesFile,setImagesFile]=useState([]);
  const dispatch=useDispatch()
  const nameValueLimit=30,
        commentValueLimit=200,
        howToGetProductionLimit=30,
        scaleLimit=20,
        colorLimit=20,
        seriesLimit=30,
        imageLimit=4;

  const inputProductionName=useCallback((event)=>{
    setProductionName(event.target.value);
  },[setProductionName])
  const inputProductionComment=useCallback((event)=>{
    setProductionComment(event.target.value)
  },[setProductionComment])
  const inputScale=useCallback((event)=>{
    setScale(event.target.value)
  },[setScale])
  const inputHowToGetProduction=useCallback((event)=>{
    setHowToGetProduction(event.target.value)
  },[setHowToGetProduction])
  const inputColor=useCallback((event)=>{
    setColor(event.target.value)
  },[setColor])
  const inputSeries=useCallback((event)=>{
    setSeries(event.target.value)
  },[setSeries])
  const inputSituatio=useCallback((event)=>{
    setSituation(event.target.value)
  },[setSituation])
  
  const inputImage=useCallback((event)=>{
    const imageUrlList=[]
    const imageFileList=[]
    for(let i=0;i<event.target.files.length;i++){
      const imageObject=event.target.files[i]
      imageUrlList.push(window.URL.createObjectURL(imageObject))
      imageFileList.push(imageObject)
    }
    setImages(imageUrlList);
    setImagesFile(imageFileList)
    // if(!event.target.files[0]){
    //   setImages("")
    //   setImagesFile("")
    //   return
    // }else{
    //   const imageObject=event.target.files[0]

    //   setImages(window.URL.createObjectURL(imageObject))
    //   setImagesFile(imageObject)
    // }
  },[setImages,setImagesFile])

  const onSubmit=(event)=>{
    event.preventDefault();
    dispatch(loadingAction())
    dispatch(productionRecord({
      name:productionName,
      nameValueLimit:30,
      comment:productionCommment,
      commentValueLimit:commentValueLimit,
      howToGetProduction:howToGetProduction,
      howToGetProductionLimit:howToGetProductionLimit,
      scale:scale,
      scaleLimit:scaleLimit,
      color:color,
      colorLimit:colorLimit,
      series:series,
      seriesLimit:seriesLimit,
      situation:situation,
      imagesFile:imagesFile
    }))

  }
  return (
    <div
    className={styles.Frame}>
      <form 
      onSubmit={onSubmit}>
        <div
        className={styles.ProductionName}>
            <Name
            value={productionName}
            onChange={inputProductionName}
            limit={nameValueLimit}/>
        </div>
        <div
        className={styles.Comment}>
            <Comment
            onChange={inputProductionComment}
            limit={commentValueLimit}/>
        </div>
        <div>
          <Image
          imagesUrl={images}
          onChange={inputImage}/>
        </div>
        <SubContents
          series={series}
          inputSeries={inputSeries}
          seriesLimit={seriesLimit}
          scale={scale}
          inputScale={inputScale}
          scaleLimit={scaleLimit}
          color={color}
          inputColor={inputColor}
          colorLimit={colorLimit}
          howTogetProduction={howToGetProduction}
          inputhowToGetProduction={inputHowToGetProduction}
          howTogetProductionLimit={howToGetProductionLimit}
          inputSituation={inputSituatio}/>
        <div
        className={styles.Enter}>
            <Enter/>
        </div>
        
      </form>
    </div>
  )
}

export default Production
