import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware,
}from "redux";
import { UserReducer } from "../user/reducer";
import { thunk } from "redux-thunk";


export default function createStore(){
    return reduxCreateStore(
        combineReducers({
            user:UserReducer,
        }),
        applyMiddleware(thunk)

    )
}
