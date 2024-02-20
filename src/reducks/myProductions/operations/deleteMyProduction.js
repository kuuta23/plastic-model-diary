import { deleteDoc, doc } from "firebase/firestore"
import { db, storage } from "../../../firebase"
import { myProductionsAction, productionsAction } from "../actions";
import { deleteObject, ref } from "firebase/storage";

const deleteMyProduction=(value)=>{
    return async(dispatch,setState)=>{
        const state=setState();
        const myProductions=state.myProductions.myProductions

        const user = state.user
        if(user.isSignedIn){

            for(var i=0;i<myProductions.length;i++){
                if(myProductions[i].id==value.id){
                    var index=i
                }
            }
            myProductions.splice(index,1)
            dispatch(myProductionsAction({myProductions:myProductions}))
            if(value.photoUrl){
                const productionStorageRef=ref(storage,"images/productions/"+value.id+"/production.jpg")
                deleteObject(productionStorageRef)
            }
            
            const productionRef=doc(db,"productions",value.id);
            await deleteDoc(productionRef);
        }


        


    }
}

export default deleteMyProduction