import myProductions from "./selectors/myProducyions";
import myProfiles from "./selectors/myProfile";

const selectorMyProductions=(reselect=false)=>{
    return async(dispatch,setState)=>{
        const state=setState();
        const user=state.user;
        const myPrds=state.productions.myProductions;
        if(user.isSignedIn&&myPrds.length==0 || reselect){
            await dispatch(myProductions())
            await dispatch(myProfiles())
        }
    }
}
export default selectorMyProductions