import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { noValue, overValue } from "../../../Template"
import { recordErrorAction, recordErrorResetAction } from "../../error/record/actions";
import { db, storage } from "../../../firebase";
import { loadingAction, resetLoadingAction } from "../../loading/actions";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const commentRecord=({comment="",commentLimit=0,imageFile=""})=>{
    return async(dispatch,setState)=>{
        const state=setState()
        const user =state.user
        
        const overComment=overValue(comment,commentLimit);
        const noComment=noValue(comment)
        const noImage=noValue(imageFile)
        const error={
            commentOverValue:false,
            commentNoValue:false

        }
        if(overComment){
            dispatch(recordErrorAction({...error,commentOverValue:true}))
            dispatch(resetLoadingAction());
        }else if(noComment && noImage){
            dispatch(recordErrorAction({...error,commentNoValue:true}))
            dispatch(resetLoadingAction());
        }else{
            const data={
                uid:user.uid,
                comment:comment,
                uploadDate:serverTimestamp(),
                photoUrl:""
            }
            const singleCommentDoc=collection(db,"singleComment")
            await addDoc(singleCommentDoc,data)
            .then((singleCommentDoc)=>{
                
                if(!imageFile){
                    dispatch(resetLoadingAction())
                    return;
                }
                dispatch(loadingAction())
                // 写真
                const storageRef=ref(storage,"images/singleComment/"+singleCommentDoc.id+"/singleComment.jpg")
                const uploadTask=uploadBytesResumable(storageRef,imageFile)
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
                    await updateDoc(doc(db,"singleComment",singleCommentDoc.id),{photoUrl:downloadURL})
                    dispatch(resetLoadingAction())
                    });
                }
                );
            })
            .catch(()=>{
                dispatch(resetLoadingAction());
                dispatch(recordErrorResetAction())
            })
            
        }
    }
}

export default commentRecord