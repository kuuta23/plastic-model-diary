import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../../firebase";
import { productionsAction } from "../../actions";

const productions=(length=10,openUid=false)=>{
    return async(dispatch,setState)=>{
        const state=setState()
        const user=state.user
        const productionRef=collection(db,"productions");

        var q;
        if(openUid!="null"&&openUid){
            q=query(productionRef,
            where("uid","==",openUid),
            orderBy("uploadTime","desc"),
            limit(length))
        }else if(openUid=="null"||!openUid){
            q=query(productionRef,
            orderBy("uploadTime","desc"),
            limit(length));
        }
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
        dispatch(productionsAction(data))
    }
}
export default productions