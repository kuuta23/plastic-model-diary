import { Timestamp, addDoc, arrayUnion, collection, doc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { loadingAction, resetLoadingAction } from "../../../loading/actions";
import addHowToGetProductionList from "../../../profile/operations/addHowToGetProductionList";
import { db, storage } from "../../../../firebase";
import { recordProductinResetAction, recordProductionImagesAction, recordProductionResetAction } from "../actions";

const productionRecord=()=>{
    return async (dispatch,setState)=>{
        const state=setState()
        const user = state.user;
        const production=state.recordProduction
        const recordError=state.recordProductionError
        console.log(production,recordError);

        if(recordError.error){
            return 0;
        }else{
            const data={
                uid:user.uid,
                uploadTime:serverTimestamp(),
                latestTime:serverTimestamp(),
                name:production.name,
                comment:production.comment,
                scale:production.scale,
                color:production.color,
                howToGetProduction:production.howToGetProduction,
                series:production.series,
                dairy:[],
                situation:production.situation,
                images:[]
            }
            const productionsRef=collection(db,"productions")
            await addDoc(productionsRef,data)
            .then((productionDoc)=>{
                dispatch(loadingAction())
                // 写真
                for(let i=0;i<production.images.length;i++){
                    const storageRef=ref(storage,"images/productions/"+productionDoc.id+"/production-"+i+".jpg")
                    const uploadTask=uploadBytesResumable(storageRef,production.images[i])
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
                        getDownloadURL(uploadTask.snapshot.ref)
                        .then(async(downloadURL) => {
                            await updateDoc(doc(db,"productions",productionDoc.id),{images:arrayUnion(downloadURL)})
                            dispatch(resetLoadingAction())
                        });
                    }
                    );
                }
                

            
            })
            
            
            
            await updateDoc(doc(db,"profile",user.uid),{
                howToGetProduction:arrayUnion(production.howToGetProduction),
                scale:arrayUnion(production.scale),
                color:arrayUnion(production.color),
                series:arrayUnion(production.series)
            });
            dispatch(resetLoadingAction());
            dispatch(recordProductionResetAction())
        }
    }
}
export default productionRecord