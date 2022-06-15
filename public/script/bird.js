class Bird {
    constructor(top, left) {
        this.top = top;
        this.left = left;
        this.velocity = defaultVelocity;
        this.acceleration = defaultGravity;
        this.animationIndex=2;
        this.score=0;
        this.create();
    }

    create() {

        this.birdRect = document.createElement('div');
        this.birdRect.style.position = 'absolute';
        this.birdRect.style.width = toPx(widthOfBird);
        this.birdRect.style.height = toPx(heightOfBird);
        this.birdRect.style.top = toPx(this.top)
        this.birdRect.style.left = toPx(this.left);
        this.birdRect.style.zIndex='2';
        this.birdRect.style.backgroundImage=flappingUrls[this.animationIndex];
        this.birdRect.style.backgroundSize='100% 100%'
        gamewindow.append(this.birdRect);

    }

    listenKeyPress() {
        document.addEventListener('keypress', function event(e) {
                if (e.code == 'KeyW' || e.code=='Space') {

                    this.acceleration = defaultForce;
                    this.velocity=0;

                    var interval = setInterval(function () {
                        this.acceleration-=defaultIncrement;
                        if (this.acceleration <= defaultGravity) {
                            this.acceleration = defaultGravity;
                            clearInterval(interval)
                        }
                    }.bind(this), 1000 /60  );
                }


        }.bind(this))
    }

    listenKeyPress2() {
        document.addEventListener('keyup', function event(e) {
                if (e.code == 'KeyW' || e.code=="Space") {

                    this.top-=5;
                }



        }.bind(this))
    }
    updatePosition(){
        this.velocity+=this.acceleration;
        this.top+=this.velocity;
        if(this.velocity>maxVelocity){
            this.velocity=maxVelocity;
        }
        this.birdRect.style.top = toPx(this.top)





        if(this.velocity>0){
            this.birdRect.style.transform=`rotate(40deg)`;
        }
        else{
            this.birdRect.style.transform=`rotate(-40deg)`;
        }

        //this relation with velocity was hit and trial, and as deriving actual relation for px can be difficult
        this.birdRect.style.transform=`rotate(${this.velocity*9}deg)`;

    }
    updatePosition2(){
        this.birdRect.style.top = toPx(this.top)

    }

    collisionCheck(){
        if(this.top>bottomHeightForObstacle){
            return true;
        }
        if(this.top<0){
            return true;
        }
        return false;
    }

    flappingAnimation(){
        this.animationIndex+=10;
        if(this.animationIndex>=400){
            this.animationIndex=0;
        }

        this.birdRect.style.backgroundImage=flappingUrls[Math.floor(this.animationIndex/100)];

// setInterval(function(){
    // this.animationIndex+=1;
    // if(this.animationIndex>=4){
    //     this.animationIndex=0;
    // }
    // this.birdRect.style.backgroundImage=flappingUrls[this.animationIndex];
// },1000/60);

    }

    fallingAnimation(){
        this.top+=fallingSpeed;
        this.birdRect.style.top = toPx(this.top)
        this.birdRect.style.transform=`rotate(90deg)`;
    }
    deadFrame(){
        this.birdRect.style.backgroundImage=DeadImgUrl;


    }


    // showScore(){

    // }





}