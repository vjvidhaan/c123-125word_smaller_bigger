
left_wristX=""
left_wristY=""
right_wristX=""
right_wristY=""
difference=""

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO)
    video.size(300,300);
poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function draw(){
    background('#423d3d');
    fill("#3a91bd");
    stroke("#45bd3c");
text("Vidhaan", 100, 100);
textSize(difference);

   
}


function modelLoaded(){
    console.log("poseNet initalized!");
}

function gotPoses(results){
    if(results.length > 0){
console.log(results);


left_wristX = results[0].pose.leftWrist.x;
left_wristY = results[0].pose.leftWrist.y;
console.log("LeftWrist x =" +left_wristX);
console.log("LeftWrist y =" +left_wristY);

right_wristX = results[0].pose.rightWrist.x;
right_wristY = results[0].pose.rightWrist.y;
console.log("rightWrist x =" +right_wristX);
console.log("rightWrist y  ="+right_wristY );

difference = left_wristX - right_wristX;
    }
}



250