import { deleteDoc, doc } from "firebase/firestore"
import { db, storage } from "../../../firebase"
import { productionsAction } from "../actions";
import { deleteObject, ref } from "firebase/storage";

const deleteProduction=(value)=>{
    return async(dispatch,setState)=>{
        const state=setState();
        const productions =state.productions.productions
        const user = state.user
        if(user.isSignedIn){

            for(var i=0;i<productions.length;i++){
                if(productions[i].id==value.id){
                    var index=i
                }
            }
            productions.splice(index,1)
            dispatch(productionsAction({productions:productions}))
            if(value.photoUrl){
                const productionStorageRef=ref(storage,"images/productions/"+value.id+"/production.jpg")
                deleteObject(productionStorageRef)
            }
            
            const productionRef=doc(db,"productions",value.id);
            await deleteDoc(productionRef);
        }


        


    }
}

export default deleteProduction