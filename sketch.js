var ball;
var database;
var position;

function setup()
{
    database = firebase.database()
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var bpref = database.ref("ball/position")
    bpref.on('value', readposition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-10,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(10,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-10);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,10);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('ball/position').set({
        x:position.x + x , 
        y:position.y + y
    })

}
function readposition(data){
position = data.val()
ball.x = position.x
ball.y = position.y
}