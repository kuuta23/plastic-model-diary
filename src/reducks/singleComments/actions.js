export const COMMENTS="COMMENTS";
export const commentsAction=(commentsState)=>{
    return{
        type:"COMMENTS",
        payload:{
            comments:commentsState.comments
        }
    }
}
export const COMMENTS_RESET="COMMENTS_RESET";
export const commentsResetAction=()=>{
  return{
    type:"COMMENTS_RESET",
    payload:{
      comments:[]
    }
  }
}
