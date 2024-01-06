import * as Actions from "./actions";
import initialState from "../store/initialState";

export const  SaveReducer=(state=initialState.save,action)=>{
    switch (action.type){
        case Actions.SAVE:
            return{
                ...state,
                ...action.payload
            }
        case Actions.SAVE_RESET:
            return{
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
