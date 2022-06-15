
// var startscreen=document.createElement('button');
// startscreen.style.width='100%';
// startscreen.style.height=toPx(heightOfWindow);
// startscreen.style.position='relative';
// startscreen.style.background='url(../assets/background-night.png)';
// startscreen.style.justifyContent='center';
// startscreen.style.alignItems='center';

startscreen.addEventListener('click', event => {
    gamewindow1.style.display = 'none';
    speedOfObstacle = 10;
    var status = start();
})

function start() {
    gamewindow.innerHTML = '';
    gamewindow.style.width = `${widthOfWindowInPercent}%`;
    gamewindow.style.margin = '0rem auto';
    gamewindow.style.height = toPx(heightOfWindow);
    gamewindow.style.position = 'relative';
    gamewindow.style.background = 'url(../assets/background-night.png)';
    gamewindow.style.overflowX = 'clip';
    gamewindow.style.display = 'flex';
    gamewindow.style.zIndex = '1';


    let ground = document.createElement('div');
    ground.style.width = '100%';
    ground.style.height = toPx(heightOfGround);
    ground.style.position = 'absolute';
    ground.style.bottom = toPx(0);
    ground.style.zIndex = '1';
    ground.style.background = 'url(../assets/base.png)'
    gamewindow.append(ground);





    let obstacleArray = []
    for (let i = 0; i < 1; i++) {
        let obs = new Obstacle(100, widthOfWindow + i * spacingBetweenObstacle);
        obstacleArray.push(obs);
    }

    let bird = new Bird(50, 200);
    bird.listenKeyPress();

    let scorediv = document.createElement('div');
    scorediv.style.textAlign = 'center';
    scorediv.style.margin = '0px auto';
    scorediv.style.fontSize = '20px';
    scorediv.style.color = 'white';
    scorediv.style.display = 'relative';
    scorediv.style.zIndex = '3';
    gamewindow.append(scorediv)
    let gameoverFlag = false;
    function play() {
        if (gameoverFlag == false) {

            for (let j = 0; j < obstacleArray.length; j++) {
                obstacleArray[j].moveObstacle();
                gameoverFlag = obstacleArray[j].respawnCheck(j, bird);
                if (gameoverFlag == true) {
                    break;
                }
            }


            bird.updatePosition();
            bird.flappingAnimation();
        }
        if (gameoverFlag == false) { gameoverFlag = bird.collisionCheck(); }
        scorediv.innerHTML = `Score = ${bird.score}&emsp;&emsp; Record =    ${highestScore}`
        speedOfObstacle = 10 + bird.score;
        speedOfGround=150/speedOfObstacle
        ground.style.animation=`carMove linear ${speedOfGround}s infinite`


        if (gameoverFlag == true) {
            gameoverFlag = false;
            speedOfObstacle = 0;
            bird.fallingAnimation();
            if (bird.top + fallingSpeed >= bottomHeightForObstacle - heightOfBird) {
                bird.top = bottomHeightForObstacle - heightOfBird;
                bird.deadFrame();
            }

            startscreen.style.display = 'block';
            startscreen.innerHTML='Press to restart'
            gamewindow1.style.display = 'block';
            gamewindow.style.display = 'none';
            return gameoverFlag;
        }
        window.requestAnimationFrame(() => {
            play();
        })
    }
    play();
}