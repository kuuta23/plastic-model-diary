import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../../../firebase"

const productionDelete=(id)=>{
    return async(dispatch,setState)=>{
        const state=setState();
        const productions =state.save.productions

        for(var i=0;i<productions.length;i++){
            if(productions.id==id){
                var index=i
            }
        }
        productions.splice(index,1)

        const productionRef=doc(db,"productions",id);
        await deleteDoc(productionRef);


    }
}

export default productionDelete