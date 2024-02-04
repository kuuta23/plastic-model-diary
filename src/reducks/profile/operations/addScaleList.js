import { profileAction } from "../actions";

const addScaleList=(add)=>{
    return async(dispatch,setState)=>{
        const state =setState()
        const list =state.profile.scale;
        list.push(add);
        dispatch(profileAction({scale:list}))
    }
}
export default addScaleList