import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware,
}from "redux";
import { UserReducer } from "../user/reducer";
import { thunk } from "redux-thunk";
import { UserErrorReducer } from "../error/user/reducers";
import { LoadingReducer } from "../loading/reduers";
import { RecordReducer } from "../record/reducers";
import { RecordErrorReducer } from "../error/record/reducers";
import { SaveReducer } from "../saveData/reducers";


export default function createStore(){
    return reduxCreateStore(
        combineReducers({
            user:UserReducer,
            UserError:UserErrorReducer,
            loading:LoadingReducer,
            record:RecordReducer,
            recordError:RecordErrorReducer,
            save:SaveReducer
        }),
        applyMiddleware(thunk)

    )
}
