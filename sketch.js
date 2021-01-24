var jerry, tom;
var jerryImg1, jerryImg2, jerryImg3;

var tomImg1, tomImg2, tomImg3;

var backgroundImg;

var together;

var canvas;


function preload() {
    
    backgroundImg = loadImage("images/garden.png");
    
    jerryImg1 = loadAnimation("images/jerryOne.png");
    jerryImg2 = loadAnimation("images/jerryTwo.png", "images/jerryThree.png"); 
    jerryImg3 = loadAnimation("images/jerryFour.png");

    tomImg1 = loadAnimation("images/tomOne.png");
    tomImg2 = loadAnimation("images/tomTwo.png", "images/tomThree.png");
    tomImg3 = loadAnimation("images/tomFour.png");
    
}

function setup(){
    canvas = createCanvas(1000,800); 

    tom = createSprite(870,600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200,600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;

}

function draw() {

    background(backgroundImg);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX = 0;
        tom.addAnimation("tomLastImg", tomImg3);
        tom.x = 300;
        tom.scale = 0.2;        
        tom.changeAnimation("tomLastImg");

        jerry.addAnimation("jerryLastImg", jerryImg3);
        jerry.scale = 0.15;
        jerry.changeAnimation("jerryLastImg");
    }

    drawSprites();
}
 
function keyPressed(){
    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");

        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}  