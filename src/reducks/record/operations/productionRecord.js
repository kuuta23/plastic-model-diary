import { Timestamp, addDoc, arrayUnion, collection, doc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { noValue, normalValueCondition, overValue } from "../../../Template"
import { db } from "../../../firebase";
import { recordAction } from "../actions";
import { resetLoadingAction } from "../../loading/actions";
import { recordErrorAction, recordErrorResetAction } from "../../error/record/actions";
import addHowToGetProductionList from "../../profile/operations/addHowToGetProductionList";

const productionRecord=({
    name,
    nameValueLimit,
    comment,
    commentValueLimit,
    howToGetProduction,
    howToGetProductionLimit,
    scale,
    scaleLimit,
    color,
    colorLimit,
    series,
    seriesLimit,
    situation
})=>{
    return async (dispatch,setState)=>{
        const state=setState()
        const user = state.user
        const noName=noValue(name)
        const overName=overValue(name,nameValueLimit)
        const overComment=overValue(comment,commentValueLimit)
        const overHowToGetProduction=overValue(howToGetProduction,howToGetProductionLimit)
        const overScale=overValue(scale,scaleLimit)
        const overColor=overValue(color,colorLimit)
        const overSeries=overValue(series,seriesLimit)
        dispatch(recordErrorResetAction())
        if(noName){
            dispatch(recordErrorAction({nameNoValue:true}))
            dispatch(resetLoadingAction());
        }else if(overName){
            dispatch(recordErrorAction({nameOverValue:true}))
            dispatch(resetLoadingAction());
        }else if(overComment){
            dispatch(recordErrorAction({commentOverValue:true}))
            dispatch(resetLoadingAction());
        }else if(overHowToGetProduction){
            dispatch(recordErrorAction({howToGetProductionOverValue:true}))
            dispatch(resetLoadingAction());
        }else if(overScale){
            dispatch(recordErrorAction({scaleOver:true}))
            dispatch(resetLoadingAction());
        }else if(overColor){
            dispatch(recordErrorAction({colorOver:true}))
            dispatch(resetLoadingAction());
        }else if(overSeries){
            dispatch(recordErrorAction({seriesOver:true}))
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
            if(!situation){
                situation=false
            }
            const data={
                uid:user.uid,
                uploadTime:serverTimestamp(),
                latestTime:serverTimestamp(),
                name:name,
                comment:comment,
                scale:scale,
                color:color,
                howToGetProduction:howToGetProduction,
                series:series,
                dairy:[],
                situation:situation
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
export default productionRecord