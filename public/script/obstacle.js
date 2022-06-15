class Obstacle{
    constructor(width,left){
        this.width=width;
        this.height=generateRandom(minHeightOfObstacle,bottomHeightForObstacle-gapBetweenPipe-minHeightOfObstacle);
        this.gap=gapBetweenPipe;
        this.left=left;
        this.createObstacle();

    }

    createObstacle(){

        this.firstRect=document.createElement('div');
        this.firstRect.style.position='absolute';
        this.firstRect.style.width=toPx(this.width);
        this.firstRect.style.height=toPx(this.height);
        this.firstRect.style.top='0px';
        this.firstRect.style.left=toPx(this.left);
    this.firstRect.style.backgroundImage='url(./assets/pipe-green.png)';
    this.firstRect.style.backgroundSize='100%'
    this.firstRect.style.transform='rotate(180deg)'



        let topOfSecondRect=this.height+this.gap;
        let heightOfSecondRect=bottomHeightForObstacle-topOfSecondRect;

        this.secRect=document.createElement('div');
        this.secRect.style.position='absolute';
        this.secRect.style.zIndex='1';
        this.secRect.style.width=toPx(this.width);
        this.secRect.style.left=toPx(this.left);
        this.secRect.style.top=toPx(topOfSecondRect);
        this.secRect.style.height=toPx(heightOfSecondRect);

        this.secRect.style.backgroundImage='url(./assets/pipe-green.png)';
        this.secRect.style.backgroundSize='100%';


        gamewindow.append(this.firstRect);
        gamewindow.append(this.secRect);
 
    }
    moveObstacle(){
        this.left-=speedOfObstacle;
        this.firstRect.style.left=toPx(this.left);
        this.firstRect.style.height=toPx(this.height);

        let topOfSecondRect=this.height+this.gap;
        let heightOfSecondRect=bottomHeightForObstacle-topOfSecondRect;
        this.secRect.style.left=toPx(this.left);
        this.secRect.style.height=toPx(heightOfSecondRect);
        this.secRect.style.top=toPx(topOfSecondRect);


    }

    respawnCheck(i,bird){
        let col1=false;
        col1=intersectionOfRectangle(0,this.left,this.width,this.height,bird.top,bird.left,widthOfBird,heightOfBird);
       if(col1==true){
        col1=false;
           return true;
       }

       let topOfSecondRect=this.height+this.gap;
       let heightOfSecondRect=bottomHeightForObstacle-topOfSecondRect;

       let col2=false;
       col2=intersectionOfRectangle(topOfSecondRect,this.left,this.width,heightOfSecondRect,bird.top,bird.left,widthOfBird,heightOfBird);
      if(col2==true){
        col2=false;
       return true;
       
      }



        if(this.left<=-100){
            console.log(bird.score);
            bird.score++;
            if(highestScore<bird.score){
                highestScore=bird.score
            localStorage.setItem('highestScoreOfFlappyBird', bird.score);
            }
        this.left=widthOfWindow+i*spacingBetweenObstacle;
        this.height=generateRandom(minHeightOfObstacle,bottomHeightForObstacle-gapBetweenPipe-minHeightOfObstacle);
        }
return false;




    }


}