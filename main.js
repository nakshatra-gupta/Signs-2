Webcam.set({
    width: 350,
    height:300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function takeSnapshot ()
{
Webcam.snap(function(data_uri)
{
document.getElementById("Output").innerHTML = '<img id = "captured_image" src = "'+data_uri+'" >';
});
}

Classifier = ml5.imageClassifer('https://teachablemachine.withgoogle.com/models/KDxKhfl5Y/model.json',model_loaded);