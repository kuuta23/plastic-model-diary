import productions from "./selectors/productions";
import profiles from "./selectors/profiles";

const selectorProductions=()=>{
    return async(dispatch)=>{
        dispatch(productions())
        .then(()=>{
            dispatch(profiles())
        })
    }
}
export default selectorProductions