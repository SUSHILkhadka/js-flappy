const gamewindow1=document.querySelector('.gamewindow1')
var gamewindow=document.createElement('div');
document.body.append(gamewindow);
const startscreen=document.querySelector('.startscreen')
const gameoverscreen=document.querySelector('.gameoverscreen')


const widthOfWindowInPercent=80;
const heightOfWindow=500;
const widthOfWindow=gamewindow.clientWidth;
const gapBetweenPipe=200;
const heightOfGround=100;

const bottomHeightForObstacle=heightOfWindow-heightOfGround;
const minHeightOfObstacle=20
const spacingBetweenObstacle=300

const widthOfBird=30;
const heightOfBird=30;
const fallingSpeed=10;

const defaultVelocity=0.1;
const defaultGravity=0.3;
const defaultIncrement=-1;
const defaultForce=-3;
const maxVelocity=10;
