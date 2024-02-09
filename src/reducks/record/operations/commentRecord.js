import { addDoc, collection, doc, serverTimestamp } from "firebase/firestore";
import { noValue, overValue } from "../../../Template"
import { recordErrorAction, recordErrorResetAction } from "../../error/record/actions";
import { db } from "../../../firebase";
import { resetLoadingAction } from "../../loading/actions";

const commentRecord=({comment="",commentLimit=0})=>{
    return async(dispatch,setState)=>{
        const state=setState()
        const user =state.user
        const singleCommentDoc=collection(db,"singleComment")
        const overComment=overValue(comment,commentLimit);
        const noComment=noValue(comment)
        const error={
            commentOverValue:false,
            commentNoValue:false

        }
        if(overComment){
            dispatch(recordErrorAction({...error,commentOverValue:true}))
            dispatch(resetLoadingAction());
        }else if(noComment){
            dispatch(recordErrorAction({...error,commentNoValue:true}))
            dispatch(resetLoadingAction());
        }else{
            const data={
                uid:user.uid,
                comment:comment,
                uploadDate:serverTimestamp()
            }
            await addDoc(singleCommentDoc,data)
            .then(()=>{
                dispatch(resetLoadingAction());
                dispatch(recordErrorResetAction())
            })
            .catch(()=>{
                dispatch(resetLoadingAction());
                dispatch(recordErrorResetAction())
            })
            
        }
    }
}

export default commentRecord