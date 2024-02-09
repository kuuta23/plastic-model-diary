import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore"
import { db } from "../../../firebase"
import { commentAction } from "../actions";

const selectorSigleComment=()=>{
    return async (dispatch,setState)=>{
        const singleCommnetDocs=collection(db,"singleComment");
        const q=query(singleCommnetDocs,orderBy('uploadDate','asc'),limit(20));
        await getDocs(q)
        .then(async(snapShot)=>{
            const profileRef=collection(db,"profile");
            await getDocs(profileRef)
            .then((profileSnapshot)=>{
                const data=snapShot.docs.map((value)=>{
                    var name="none"
                    for(var i=0;i<profileSnapshot.docs.length;i++){
                        if(profileSnapshot.docs[i].data.id==value.data().uid){
                            name=profileSnapshot.docs[i].data().name
                            break
                        }
                    }
                    return{
                        uid:value.data().uid,
                        userName:name,
                        comment:value.data().comment,
                        id:value.id
                    }
                    
                })
                dispatch(commentAction(data))

            })
        })
        
    }
}
export default selectorSigleComment