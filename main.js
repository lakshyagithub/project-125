difference = 0;
rightWristX = 0;
leftWristX = 0;

console.log('ml5 version loaded', ml5.version)
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);
    
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }
  function modelLoaded() {
      console.log('Model Loaded!');
  }
  function save_image() {
      save('image.png');
  }
  function draw() {
    background(220);
    textSize(difference);
    fill("#4287f5");
    text('Lakshya', 50, 400);
}
  function gotPoses(results) {
      if (results.length > 0){
          console.log(results);
          leftWristX = results[0].pose.leftWrist.x;
          rightWristX = results[0].pose.rightWrist.x;
          difference = floor(leftWristX - rightWristX);
      }
  }