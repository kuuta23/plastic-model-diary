import * as Actions from "./actions";
import initialState from "../../store/initialState";

export const  RecordProductionErrorReducer=(state=initialState.recordProductionError,action)=>{
    switch (action.type){
        case Actions.RECORD_ERROR:
            return{
                ...state,
                ...action.payload
            }
        case Actions.RECORD_ERROR_RESET:
            return{
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
