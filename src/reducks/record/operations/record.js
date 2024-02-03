import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore";
import { noValue, normalValueCondition, overValue } from "../../../Template"
import { db } from "../../../firebase";
import { recordAction } from "../actions";
import { resetLoadingAction } from "../../loading/actions";
import { recordErrorAction, recordErrorResetAction } from "../../error/record/actions";

const record=({name,nameValueLimit,comment,commentValueLimit})=>{
    return async (dispatch,setState)=>{
        const state=setState()
        const user = state.user
        const noName=noValue(name)
        const overName=overValue(name,nameValueLimit)
        const overComment=overValue(comment,commentValueLimit)
        const error={
            nameNoValue:false,
            nameOverValue:false,
            commentOverValue:false
        }
        if(noName){
            dispatch(recordErrorAction({...error,...{nameNoValue:true}}))
            dispatch(resetLoadingAction());
        }else if(overName){
            dispatch(recordErrorAction({...error,...{nameOverValue:true}}))
            dispatch(resetLoadingAction());
        }else if(overComment){
            dispatch(recordErrorAction({...error,...{commentOverValue:true}}))
            dispatch(resetLoadingAction());
        }else{
            const data={
                uid:user.uid,
                uploadTime:Timestamp.now(),
                name:name,
                comment:comment
            }
            await addDoc(collection(db,"productions"),data)
            .then(()=>{
                dispatch(resetLoadingAction());
                dispatch(recordErrorResetAction())
            })
            .catch(()=>{
                dispatch(resetLoadingAction());
            })
        }
    }
}
export default record