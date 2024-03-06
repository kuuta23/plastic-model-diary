export const PRODUCTION="PRODUCTION";
export const productionAction=(productionState)=>{
    return{
        type:"PRODUCTION",
        payload:{
            userName:productionState.userName,
            uid:productionState.uid,
            productionName:productionState.productionName,
            scale:productionState.scale,
            series:productionState.series,
            color:productionState.color,
            howToGet:productionState.howToGet,
            photoUrl:productionState.photoUrl,
            comment:productionState.comment,
            situation:productionState.situation,
            photoUrlList:productionState.photoUrlList
        }
    }
}
export const PRODUCTION_RESET="PRODUCTION_RESET";
export const productionResetAction=()=>{
  return{
    type:"PRODUCTION_RESET",
    payload:{
      userName:"",
      uid:"",
      productionName:"",
      scale:"",
      series:"",
      color:"",
      howToGet:"",
      photoUrl:"",
      comment:"",
      situation:"",
      photoUrlList:[]
    }
  }
}
