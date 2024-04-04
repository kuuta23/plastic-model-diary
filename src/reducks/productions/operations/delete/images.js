import { deleteObject, ref } from "firebase/storage";
import { storage } from "../../../../firebase";

const images=(id)=>{
    return async(dispatch,setState)=>{

        const state=setState();
        const productions =state.productions.productions;
        const user = state.user
        let i;
        productions.forEach((value,num)=>{
            if(id===value.id){i=num}
        })
        if(productions[i].images){
            productions[i].images.forEach((value,i)=>{
                const productionStorageRef=ref(storage,"images/productions/"+id+"/production-"+i+".jpg")
                deleteObject(productionStorageRef)
            })
        }

    }
}

export default images