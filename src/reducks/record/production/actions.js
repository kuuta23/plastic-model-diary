export const RECORD="RECORD";
export const recordProductionAction=(recordState)=>{
    return{
        type:"RECORD",
        payload:{
            name:recordState.name,
            images:recordState.images,
            comment:recordState.comment,
            scale:recordState.scale,
            color:recordState.color,
            series:recordState.series,
            situation:recordState.situation,
            howToGetProduction:recordState.howToGetProduction
        }
    }
}
export const RECORD_RESET="RECORD_RESET";
export const recordProductionResetAction=()=>{
  return{
    type:"RECORD_RESET",
    payload:{
      name:"",
      images:[],
      comment:"",
      scale:"",
      color:"",
      series:"",
      situation:"",
      howToGetProduction:""
    }
  }
}
