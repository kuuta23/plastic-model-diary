import { deleteDoc, doc } from "firebase/firestore"
import { productionsAction } from "../../actions";
import { db } from "../../../../firebase";

const production=({id})=>{
    return async(dispatch,setState)=>{
        const state=setState();
        const productions =state.productions.productions;
        let i;
        productions.forEach((value,num)=>{
            if(id==value.id){i=num}
        })
        productions.splice(i,1)
        dispatch(productionsAction({productions:productions}))
        const productionRef=doc(db,"productions",productions.id);
        await deleteDoc(productionRef);
    }
}

export default production