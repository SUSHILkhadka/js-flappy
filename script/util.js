function toPx(value){
    return `${value}px`
}


function generateRandom(min,max){
    return (Math.random()*(max-min)+min);
}


function intersectionOfRectangle(top1,left1,width1,height1,top2,left2,width2,height2){
    if(top2>top1+height1 || top1>top2+height2){
        return false;
    }
    if(left2>left1+width1 || left1>left2+width2){
        return false;
    }
    return true;

}