import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../../firebase";
import { myProductionAction } from "../../actions";

const myProductions=()=>{
    return async(dispatch,setState)=>{
        const state=setState()
        const user=state.user
        const productionRef=collection(db,"productions");

        const q=query(productionRef,where("uid","==",user.uid))
        const productionsSnapshot= await getDocs(q);

        const data=productionsSnapshot.docs.map((doc)=>{
            const value=doc.data()
            return(
                {
                    ...value,
                    ...{
                        type:"production",
                        images:value.images,
                        image:value.photoUrl,
                        edit:value.uid==user.uid,
                        id:doc.id,
                        uid:value.uid,
                        name:value.name,
                        series:value.series,
                        situation:value.situation,
                        color:value.color,
                        howToGet:value.howToGetProduction,
                        uploadDate:value.uploadTime
                    }
                    
                }
            )
        })
        console.log(data);
        dispatch(myProductionAction(data))
    }
}
export default myProductions