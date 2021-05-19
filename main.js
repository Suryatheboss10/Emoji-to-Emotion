Prediction_1="";
Prediction_2="";

Webcam.set({
    height: 300,
    width: 350,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "captured_image" src = "'+data_uri+'"/>'
    });
}

console.log("ml5 version", ml5.version);

Classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/NsdxK-Kca/model.json', modelLoaded);
function modelLoaded(){
    console.log("Model Loaded!");
}

function speak(){
    var synth=window.SpeechSynthesis;
     speak_data1 = "The first prediction is"+Prediction_1;
     speak_data2 = "and the second prediction is"+Prediction_2;
     var utterThis = new SpeechSynthesisUtterance(speak_data1+speak_data2);
     synth.speak(utterThis);
    }