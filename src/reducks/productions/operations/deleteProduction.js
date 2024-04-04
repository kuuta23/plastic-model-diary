import images from "./delete/images";
import production from "./delete/production";

const deleteProduction=(id)=>{
    return async(dispatch,setState)=>{
        const state=setState();
        const user=state.user
        if(user.isSignedIn){
            await dispatch(images(id))
            await dispatch(production(id))
        }

    }
}

export default deleteProduction