import { auth } from "../../../firebase"
import { signOutAction } from "../actions";

const signOut=()=>{
    return async (dispatch)=>{
        await auth.signOut();
        dispatch(signOutAction())
    }
  }
  export default signOut
  