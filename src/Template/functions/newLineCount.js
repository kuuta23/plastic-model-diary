export const newLineCount=(value=[])=>{
    const arr=[...value]
    const newArr=[]
    var count=0;
    var value=''
    for(var i=0;i<arr.length;i++){
        if(value!=''&&arr[i]=='\n'){
            newArr[count]=value;
            count++;
            value=''
        }else{
            value=value+arr[i];
        }
    }
    newArr[count]=value;
    return newArr
}