var PLAY = 1;
var END = 0;
var ball,ball_collided;
var ground,groundImage;
var obstacle1,obstacle2,obstacle3;
var score = 0;
var GameOver,restart,GameOverImg,restartImg;


function preload(){

ball = loadImage("ball.png");
groundImage = loadImage("ground.jpg");

obstacle1 = loadImage("obstacle1.jpg");
obstacle2 = loadImage("obstacle2.jpg");
obstacle3 = loadImage("obstacle3.jpg");

GameOver = loadImage("GameOver.png");
restart = loadImage("restart.png");


}

function setup() {
 createCanvas(1200,1200);


 ball = createSprite(50,180,20,50);
 ball.addImage("ball",ball_collided);
 ball.scale = 0.5;

 ground = createSprite(200,100,1200,30);
 ground.addImage("ground",groundImage);
 ground.x = ground.width/3;
 ground.velocityX = -(6 + 3*score/100);

 GameOver = createSprite(600,100);
 GameOver.addImage(GameOverImg);

 restart = createSprite(600,200);
 restart.addImage(restartImg);

 GameOver.scale = 0.5;
 restart.scale = 0.5;



 drawSprites()

}

function draw() {
 
}