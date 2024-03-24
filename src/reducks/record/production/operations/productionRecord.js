import { Timestamp, addDoc, arrayUnion, collection, doc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const productionRecord=({
    nameValueLimit,
    commentValueLimit,
    howToGetProductionLimit,
    scaleLimit,
    colorLimit,
    seriesLimit,
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
                situation:situation,
                photoUrlList:[]
            }
            const productionsRef=collection(db,"productions")
            await addDoc(productionsRef,data)
            .then((productionDoc)=>{
                dispatch(loadingAction())
                // 写真
                for(let i=0;i<imagesFile.length;i++){
                    const storageRef=ref(storage,"images/productions/"+productionDoc.id+"/production-"+i+".jpg")
                    const uploadTask=uploadBytesResumable(storageRef,imagesFile[i])
                    uploadTask.on('state_changed',
                    (snapshot) => {
                        dispatch(loadingAction())
                    }, 
                    (error) => {
                        // A full list of error codes is available at
                        // https://firebase.google.com/docs/storage/web/handle-errors
                        switch (error.code) {
                        case 'storage/unauthorized':
                            // User doesn't have permission to access the object
                            break;
                        case 'storage/canceled':
                            // User canceled the upload
                            break;
    
                        // ...
    
                        case 'storage/unknown':
                            // Unknown error occurred, inspect error.serverResponse
                            break;
                        }
                    }, 
                    () =>  {
                        // Upload completed successfully, now we can get the download URL
                        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
                        await updateDoc(doc(db,"productions",productionDoc.id),{photoUrlList:arrayUnion(downloadURL)})
                        dispatch(resetLoadingAction())
                        });
                    }
                    );
                }
                

            
            })
            
            
            
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