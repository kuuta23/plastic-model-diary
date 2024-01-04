import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
}from "redux";
import thunk from "redux-thunk"
import { ErrorReducer } from "../error/reducers";
import { ProfileReducer } from "../profile/reducers";

import { UsersReducer } from "../users/reducers";

export default function createStore(){
    return reduxCreateStore(
        combineReducers({
            users:UsersReducer,
            error:ErrorReducer,
            profile:ProfileReducer,
        }),
        applyMiddleware(
            thunk
        )

    )
}
