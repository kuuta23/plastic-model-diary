import * as Actions from "./actions";
import initialState from "../store/initialState";

export const  RecordReducer=(state=initialState.record,action)=>{
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
