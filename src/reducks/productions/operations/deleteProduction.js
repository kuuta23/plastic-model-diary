import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../../../firebase"
import { productionsAction } from "../actions";

const deleteProduction=(id)=>{
    return async(dispatch,setState)=>{
    
        const state=setState();
        const productions =state.productions.productions
        const user = state.user
        if(user.isSignedIn){

            for(var i=0;i<productions.length;i++){
                if(productions.id==id){
                    var index=i
                }
            }
            productions.splice(index,1)
            dispatch(productionsAction({productions:productions}))
            const productionRef=doc(db,"productions",id);
            await deleteDoc(productionRef);
        }


        


    }
}

export default deleteProduction