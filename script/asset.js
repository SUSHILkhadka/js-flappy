

function obstacleSprite(width,height){
    let spriteDiv=document.createElement('div');
    spriteDiv.style.width=toPx(width);
    spriteDiv.style.height=toPx(height);

    spriteDiv.style.backgroundImage='url(./assets/pipe-green.png)';
    spriteDiv.style.backgroundSize='100%'
    return spriteDiv;
}
function obstacleSprite2(width,height){
    let spriteDiv=document.createElement('div');
    spriteDiv.style.width=toPx(width);
    spriteDiv.style.height=toPx(height);

    spriteDiv.style.backgroundImage='url(./assets/pipe-red.png)';
    spriteDiv.style.backgroundSize='100%'
    spriteDiv.style.transform='rotate(180deg)';
    return spriteDiv;
}
const flappingUrls=['url(./assets/redbird-downflap.png)','url(./assets/redbird-midflap.png)','url(./assets/redbird-upflap.png)','url(./assets/redbird-midflap.png)']
const DeadImgUrl='url(./assets/redbird-midflap.png)';
