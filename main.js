Webcam.set({
    width:450,
    height:300,
    image_format:"png",
    png_quality:90
})

Webcam.attach("#camera")
function Click_Image(){
    Webcam.snap(function(Data){
        document.getElementById("result").innerHTML = "<img id='image1' src='"+Data+"'>"

    })
}

console.log("ml5 version",ml5.version)

var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Vu0Zb1FXp/model.json", modelLoaded)

function modelLoaded(){
    console.log("Teachable Model Loaded")
}