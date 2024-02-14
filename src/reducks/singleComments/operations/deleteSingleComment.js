import { deleteDoc, doc } from "firebase/firestore"
import { db, storage } from "../../../firebase"
import { commentsAction, productionsAction } from "../actions";
import { deleteObject, ref } from "firebase/storage";

const deleteSingleComment=(value)=>{
    console.log(value);
    return async(dispatch,setState)=>{
        const state=setState();
        const comments =state.comments.comments
        const user = state.user
        if(user.isSignedIn){

            for(var i=0;i<comments.length;i++){
                if(comments[i].id==value.id){
                    var index=i
                }
            }
            comments.splice(index,1)
            dispatch(commentsAction({comments:comments}))
            if(value.photoUrl){
                const commentStorageRef=ref(storage,"images/singleComment/"+value.id+"/singleComment.jpg")
                await deleteObject(commentStorageRef)
            }
            
            const commentRef=doc(db,"singleComment",value.id);
            await deleteDoc(commentRef);
        }


        


    }
}

export default deleteSingleComment