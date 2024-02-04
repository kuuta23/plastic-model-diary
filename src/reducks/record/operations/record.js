import { Timestamp, addDoc, arrayUnion, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { noValue, normalValueCondition, overValue } from "../../../Template"
import { db } from "../../../firebase";
import { recordAction } from "../actions";
import { resetLoadingAction } from "../../loading/actions";
import { recordErrorAction, recordErrorResetAction } from "../../error/record/actions";
import addHowToGetProductionList from "../../profile/operations/addHowToGetProductionList";

const record=({
    name,
    nameValueLimit,
    comment,
    commentValueLimit,
    howToGetProduction,
    howToGetProductionLimit})=>{
    return async (dispatch,setState)=>{
        const state=setState()
        const user = state.user
        const noName=noValue(name)
        const overName=overValue(name,nameValueLimit)
        const overComment=overValue(comment,commentValueLimit)
        const overHowToGetProduction=overValue(howToGetProduction,howToGetProductionLimit)
        const error={
            nameNoValue:false,
            nameOverValue:false,
            commentOverValue:false,
            howToGetProductionOverValue:false
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
        }else if(overHowToGetProduction){
            dispatch(recordErrorAction({...error,...{howToGetProductionOverValue:true}}))
            dispatch(resetLoadingAction());
        }else{
            if(!howToGetProduction){
                howToGetProduction="不明"
            }
            const data={
                uid:user.uid,
                uploadTime:Timestamp.now(),
                name:name,
                comment:comment,
                howToGetProduction:howToGetProduction
            }
            await addDoc(collection(db,"productions"),data);
            await updateDoc(doc(db,"profile",user.uid),{howToGetProduction:arrayUnion(howToGetProduction)});
            dispatch(addHowToGetProductionList(howToGetProduction))
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