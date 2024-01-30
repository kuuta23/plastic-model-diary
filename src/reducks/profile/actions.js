export const PROFILE="PLOFILE";
export const profileAction=(profileState)=>{
    return{
        type:"PROFILE",
        payload:{
            uid:profileState.uid,
            name:profileState.name,
        }
    }
}
export const PROFILE_RESET="PROFILE_RESET";
export const profileResetAction=()=>{
  return{
    type:"PROFILE_RESET",
    payload:{
      uid:"",
      name:""
    }
  }
}
