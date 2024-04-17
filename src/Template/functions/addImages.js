export const addImage=(images=[],image="")=>{
    console.log(images);
    if(image){
        console.log(image);
        images.push(image)
    }
    return images
}
