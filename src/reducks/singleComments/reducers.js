import * as Actions from "./actions";
import initialState from "../store/initialState";

export const  CommentsReducer=(state=initialState.comments,action)=>{
    switch (action.type){
        case Actions.COMMENTS:
            return{
                ...state,
                ...action.payload
            }
        case Actions.COMMENTS_RESET:
            return{
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
