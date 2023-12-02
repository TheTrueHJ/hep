lx = 0;
rx = 0;
size = 0;

function preload(){

}
function setup(){
canvas = createCanvas(480,360);
video = createCapture(VIDEO);
video.size(480,360);
video.position(120,200);
canvas.position(600,200);
posenet = ml5.poseNet(video, ModelLoaded);
posenet.on('pose', gotPose);
}

function ModelLoaded(){
    console.log("model loaded");
}
function gotPose(results){
    if(results.length > 0){
        console.log(results);
        lx = results[0].pose.leftWrist.x;
        rx = results[0].pose.rightWrist.x;
        size = floor(lx-rx);
        console.log(size)
    }
}

function draw(){
    background("white");
    fill("yellow");
    stroke("black");
    textSize(size);
    text("Hajin", 50, 200);
}