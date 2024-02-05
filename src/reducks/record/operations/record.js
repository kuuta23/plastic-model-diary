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
    howToGetProductionLimit,
    scale,
    scaleLimit,
    color,
    colorOver,
    series,
    seriesLimit
})=>{
    return async (dispatch,setState)=>{
        const state=setState()
        const user = state.user
        const noName=noValue(name)
        const overName=overValue(name,nameValueLimit)
        const overComment=overValue(comment,commentValueLimit)
        const overHowToGetProduction=overValue(howToGetProduction,howToGetProductionLimit)
        const overScale=overValue(scale,scaleLimit)
        const overColor=overValue(color,colorOver)
        const overSeries=overValue(series,seriesLimit)
        const error={
            nameNoValue:false,
            nameOverValue:false,
            commentOverValue:false,
            howToGetProductionOverValue:false,
            scaleOver:false,
            colorOver:false,
            seriesOver:false
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
        }else if(overScale){
            dispatch(recordErrorAction({...error,...{scaleOver:true}}))
            dispatch(resetLoadingAction());
        }else if(overColor){
            dispatch(recordErrorAction({...error,...{colorOver:true}}))
            dispatch(resetLoadingAction());
        }else if(overSeries){
            dispatch(recordErrorAction({...error,...{seriesOver:true}}))
            dispatch(resetLoadingAction());
        }else{
            if(!howToGetProduction){
                howToGetProduction="不明"
            }
            if(!scale){
                scale="不明"
            }
            if(!color){
                color="ノーマル"
            }
            if(!series){
                series="不明"
            }
            const data={
                uid:user.uid,
                uploadTime:Timestamp.now(),
                name:name,
                comment:comment,
                scale:scale,
                color:color,
                howToGetProduction:howToGetProduction,
                series:series
            }
            await addDoc(collection(db,"productions"),data);
            await updateDoc(doc(db,"profile",user.uid),{
                howToGetProduction:arrayUnion(howToGetProduction),
                scale:arrayUnion(scale),
                color:arrayUnion(color),
                series:arrayUnion(series)
            });
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