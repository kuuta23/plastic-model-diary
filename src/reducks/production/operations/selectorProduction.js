import { doc, getDoc } from "firebase/firestore"
import { db } from "../../../firebase"
import { productionAction } from "../actions";

export const selectorProduction=(productionId)=>{
    return async(dispatch,setState)=>{
        const productionDoc=doc(db,"productions",productionId);
        await getDoc(productionDoc)
        .then( async(productionSnapshot)=>{
            const profileDoc=doc(db,"profile",productionSnapshot.data().uid);
            await getDoc(profileDoc)
            .then((profileSnapshot)=>{
                const profile=profileSnapshot.data()
                const production=productionSnapshot.data()
                console.log(production);
                const data={
                    id:productionSnapshot.id,
                    uid:profileSnapshot.uid,
                    userName:profile.name,
                    productionName:production.name,
                    scale:production.scale,
                    series:production.series,
                    color:production.color,
                    howToGet:production.howToGetProduction,
                    photoUrl:production.photoUrl,
                    comment:production.comment,
                    situation:production.situation,
                    photoUrlList:production.photoUrlList

                }
                dispatch(productionAction(data))
            })
        })
    }
}