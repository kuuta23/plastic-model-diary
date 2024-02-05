export const RECORD_ERROR="RECORD_ERROR";
export const recordErrorAction=(recordState)=>{
    return{
        type:"RECORD_ERROR",
        payload:{
            nameNoValue:recordState.nameNoValue,
            nameOverValue:recordState.nameOverValue,
            commentNoValue:recordState.commentNoValue,
            commentOverValue:recordState.commentOverValue,
            howToGetProductionOverValue:recordState.howToGetProductionOverValue,
            scaleOver:recordState.scaleOver,
            colorOver:recordState.colorOver,
            seriesOver:recordState.seriesOver,
        }
    }
}
export const RECORD_ERROR_RESET="RECORD_ERROR_RESET";
export const recordErrorResetAction=()=>{
  return{
    type:"RECORD_ERROR_RESET",
    payload:{
      nameNoValue:false,
      nameOverValue:false,
      commentNoValue:false,
      commentOverValue:false,
      howToGetProductionOverValue:false,
      scaleOver:false,
      colorOver:false,
      seriesOver:false,
    }
  }
}
