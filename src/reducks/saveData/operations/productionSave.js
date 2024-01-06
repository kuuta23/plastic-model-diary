import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase";

const productionsSave=()=>{
    return async(dispatch,setState)=>{
        const state=setState()
        const user=state.user;
        const productionRef=collection(db,"productions");

        const q=query(productionRef,where("uid","==",user.uid));
        const Snapshot= await getDocs(q);

        dispatch(productionsSave({productions:Snapshot}))
    }
}