function preload()
{
 
}
function setup()
{
 canvas=createCanvas(500,499.55);
 canvas.center();
 video = createCapture(VIDEO);
 video.size(500,499.55);
 video.hide();
 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet Is Intialized');
 
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x ="+results[0].pose.nose.x);
        console.log("nose y ="+results[0].pose.nose.y);
    }
}
function draw()
{
 image(video,0 , 0 , 500 ,499.55);
}
function take_snapshot()
{
 save('myfliterisOP.png');
}