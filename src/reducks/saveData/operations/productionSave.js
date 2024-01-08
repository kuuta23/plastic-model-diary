import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase";
import { saveAction } from "../actions";

const productionsSave=()=>{
    return async(dispatch,setState)=>{
        const state=setState()
        const user=state.user;
        const productionRef=collection(db,"productions");

        const q=query(productionRef,where("uid","==",user.uid));
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