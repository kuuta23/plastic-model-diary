import { profileAction } from "../actions";

const addHowToGetProductionList=(add)=>{
    return async(dispatch,setState)=>{
        const state =setState()
        const list =state.profile.howToGetProduction;
        list.push(add);
        dispatch(profileAction({howToGetProduction:list}))
    }
}
export default addHowToGetProductionList