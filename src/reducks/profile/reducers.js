import * as Actions from "./actions";
import initialState from "../store/initialState";

export const  ProfileReducer=(state=initialState.profile,action)=>{
    switch (action.type){
        case Actions.PROFILE:
            return{
                ...state,
                ...action.payload
            }
        case Actions.PROFILE_RESET:
            return{
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
