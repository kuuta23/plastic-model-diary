import { noString, overList, overString } from "../../../../Template";
import { recordProductionErrorResetAction, recordProdutionErrorAction } from "../../../error/record/productions/actions";

const productionRecordSecurity=()=>{
    return async (dispatch,setState)=>{
        const state=setState()
        const user = state.user;
        const production=state.recordProduction
        console.log(production  );
        if(!user.isSignedIn){
            dispatch(recordProdutionErrorAction())
        }
        else if(noString(production.name)||overString(production.name,30)){
            dispatch(recordProdutionErrorAction())
        }
        else if(overString(production.comment,200)){
            dispatch(recordProdutionErrorAction())
        }
        else if(overString(production.color,30)){
            dispatch(recordProdutionErrorAction())
        }
        else if(overString(production.scale,30)){
            dispatch(recordProdutionErrorAction())
        }
        else if(overString(production.howToGetProduction,30)){
            dispatch(recordProdutionErrorAction())
        }
        else if(overString(production.series,30)){
            dispatch(recordProdutionErrorAction())
        }
        else if(overList(production.images,7)){
            dispatch(recordProdutionErrorAction())
        }else{
            dispatch(recordProductionErrorResetAction())
        }
        
                

            
           
    }
}
export default productionRecordSecurity