Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90

});
camera = document.getElementById("camera");
Webcam.attach("#camera")


function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json", loading);


function loading()

{
console.log("model loaded")

}

function check() {
    img = document.getElementById("Capture image");
    classifier.classify(img, gotresult);
    
}

function gotresult(error, results) {
if (error){
console.error(error);

}
else {
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_name").innerHTML = results[0].confidence.toFixed(5) * 100;

}
}