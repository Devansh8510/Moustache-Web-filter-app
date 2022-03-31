nosex=0;
nosey=0;
function preload() {
image1=loadImage("Mostache.png")

}

function setup () {
    canvas=createCanvas(350,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(350,350);
    video.hide();
    posenet_model=ml5.poseNet(video,model_loaded);
    posenet_model.on("pose",gotposes)

}
function model_loaded (){
    console.log("Your model has been loaded");

}

function draw() {
    image(video,0,0,350,350);
    image(image1,nosex,nosey,120,70)
}
function gotposes(results) {
    if(results.length > 0) {
        console.log(results);
        nosex=results[0].pose.nose.x-60;
        nosey=results[0].pose.nose.y-15;
    }
}

