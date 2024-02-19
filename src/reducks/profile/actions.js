export const PROFILE="PROFILE";
export const profileAction=(profileState)=>{
    return{
        type:"PROFILE",
        payload:{
            uid:profileState.uid,
            edit:profileState.edit,
            name:profileState.name,
            howToGetProduction:profileState.howToGetProduction,
            scale:profileState.scale,
            color:profileState.color,
            series:profileState.series
        }
    }
}
export const PROFILE_RESET="PROFILE_RESET";
export const profileResetAction=()=>{
  return{
    type:"PROFILE_RESET",
    payload:{
      edit:false,
      uid:"",
      name:"",
      howToGetProduction:[],
      scale:[],
      color:[],
      series:[]
    }
  }
}
