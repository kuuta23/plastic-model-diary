import { auth } from "../../../firebase"
import { loadingAction, resetLoadingAction } from "../../loading/actions";
import { productionsResetAction } from "../../productions/actions";
import { signOutAction } from "../actions";

const signOut=()=>{
    return async (dispatch)=>{
        dispatch(loadingAction())
        dispatch(signOutAction())
        dispatch(productionsResetAction())
        dispatch(productionsResetAction())
        await auth.signOut();
        dispatch(resetLoadingAction())
        
    }
  }
  export default signOut
  