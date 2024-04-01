import initialState from "../../store/initialState";
import * as Actions from "./actions";

export const  UserErrorReducer=(state=initialState.userError,action)=>{
    switch (action.type){
        case Actions.ERROR:
            console.log(true);
            return{
                ...state,
                ...action.payload
            }
        case Actions.CLEAR_ERROR:
            return{
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
