import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "../../../firebase";
import { saveAction } from "../actions";

const productionsSave=(length=10)=>{
    return async(dispatch,setState)=>{
        const state=setState()
        const user=state.user;
        const productionRef=collection(db,"productions");

        const q=query(productionRef,where("uid","==",user.uid),limit(length));
        const Snapshot= await getDocs(q);

        const values=Snapshot.docs.map((value)=>{

            return{
                name:value.data().name
            }
        })
        console.log(values);
        dispatch(saveAction({productions:values}))
    }
}
export default productionsSave