export const COLOR="COLOR";
export const searchColorAction=(word)=>{
    return{
        type:"COLOR",
        payload:word
    }
}
export const SERIES="SERIES"
export const searchSeriesAction=(word)=>{
  return{
    type:"SERIES",
    payload:word
  }
}

export const SCALE="SCALE"
export const searchScaleAction=(word)=>{
  return{
    type:"SCALE",
    payload:word
  }
}

export const HOW_TO_GET="HOW_TO_GET"
export const searchHowToGetAction=(word)=>{
  return{
    type:"HOW_TO_GET",
    payload:word
  }
}

export const RESET="RESET"
export const searchResetAction=()=>{
  return{
    type:"RESET",
    payload:{
      color:"",
      series:"",
      scale:"",
      howToGet:""
    }
  }
}