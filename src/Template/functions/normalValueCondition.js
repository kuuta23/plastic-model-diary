const normalValueCondition=({value="a",limit})=>{
    if(value==""){return false}
    else{return true}
}
export const noValue=(value)=>{
    if(value==""){
        return true
    }
}

export const overValue=(value,limit)=>{
   if(limit){
    if([...value].length>limit){
        return true
    }
   } 
}

export default normalValueCondition