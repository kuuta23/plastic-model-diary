import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore";
import { noValue, normalValueCondition, overValue } from "../../../Template"
import { db } from "../../../firebase";
import { recordAction } from "../actions";
import { resetLoadingAction } from "../../loading/actions";
import { recordErrorAction, recordErrorResetAction } from "../../error/record/actions";

const record=({name,nameValueLimit})=>{
    return async (dispatch,setState)=>{
        const state=setState()
        const user = state.user
        const noName=noValue(name)
        const overName=overValue(name,nameValueLimit)
        if(noName){
            dispatch(recordErrorAction({noValue:true,overValue:false}))
            dispatch(resetLoadingAction());
        }else if(overName){
            dispatch(recordErrorAction({noName:false,overValue:true}))
            dispatch(resetLoadingAction());
        }else{
            const data={
                uid:user.uid,
                uploadTime:Timestamp.now(),
                name:name
            }
            await addDoc(collection(db,"productions"),data)
            .then(()=>{
                dispatch(resetLoadingAction());
                dispatch(recordErrorResetAction())
            })
            .catch(()=>{
                dispatch(resetLoadingAction());
                dispatch(recordErrorAction({name:true}))
            })
        }
    }
}
export default record