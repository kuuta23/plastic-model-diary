export const UPDATE_NAME="UPDATE_NAME"
export const recordProductionNameAction=(value)=>{
  console.log(value);
  return{
    type:"UPDATE_NAME",
    payload:value
  }
}

export const UPDATE_IMAGES="UPDATE_IMAGES"
export const recordProductionImagesAction=(value)=>{
  return{
    type:"UPDATE_IMAGES",
    payload:value
  }
}

export const UPDATE_COMMENT="UPDATE_COMMENT"
export const recordProductinCommentAction=(value)=>{
  return{
    type:"UPDATE_COMMENT",
    payload:value
  }
}

export const UPDATE_SCALE="UPDATE_SCALE"
export const recordProductinScaleAction=(value)=>{
  return{
    type:"UPDATE_SCALE",
    payload:value
  }
}

export const UPDATE_COLOR="UPDATE_COLOR"
export const recordProductinColorAction=(value)=>{
  return{
    type:"UPDATE_COLOR",
    payload:value
  }
}

export const UPDATE_SERIES="UPDATE_SERIES"
export const recordProductinSeriesAction=(value)=>{
  return{
    type:"UPDATE_SERIES",
    payload:value
  }
}

export const UPDATE_SITUATION="UPDATE_SITUATION"
export const recordProductinSituationAction=(value)=>{
  return{
    type:"UPDATE_SITUATION",
    payload:value
  }
}

export const UPDATE_HOW_TO_GET="UPDATE_HOW_TO_GET"
export const recordProductinHowToGetAction=(value)=>{
  return{
    type:"UPDATE_HOW_TO_GET",
    payload:value
  }
}