const filterProduction=(array,color,series,howToGet,scale)=>{
    const setArray=[]
    array.forEach((value) => {
        if(color!=""&&value.color!=color){
            return;
        }
        if(series!=""&&value.series!=series){
            return;
        }
        if(howToGet!=""&&value.howToGet!=howToGet){
            return;
        }
        if(scale!=""&&value.scale!=scale){
            return;
        }
        setArray.push(value)
    });
    return setArray

}
export default filterProduction