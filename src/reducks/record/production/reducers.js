import initialState from "../../store/initialState";
import * as Actions from "./actions";

export const  RecordProductionReducer=(state=initialState.recordProduction,action)=>{
    switch (action.type){
        case Actions.RECORD:
            return{
                ...state,
                ...action.payload
            }
        case Actions.RECORD_RESET:
            return{
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
