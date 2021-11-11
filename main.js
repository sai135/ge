Webcam.set ({
    height:300,
    width:350,
    image_format:'png',
    png_quality:90
    });
    camera=document.getElementById("camera");
    Webcam.attach(camera);
    function takesnapshot() {
        Webcam.snap(function(data_uri) {
            document.getElementById("emoji").innerHTML="<img id='captured_image' src='"+data_uri+"'/>";
        });
    }
    console.log('ml5 version', ml5.version);
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/sOYqRkQrl/https://teachablemachine.withgoogle.com/models/sOYqRkQrl/    ', modelLoaded);
    function modelLoaded() {
        console.log('model Loaded!');
    }
    function speak() {
        var synth=window.speechSynthesis;
        speech_data1="THe first prediction is"+prediction1;
        var utteThis=new SpeechSynthesisUtterance(speech_data1);
        synth.speak(utteThis);
    }

    function check() {
        img= document.getElementById('captured_image');
         classifier.classify(img, gotResult);
     }
     
     function gotResult(error, results) {
     
         if(error) {
             console.error(error);
         }else {
             console.log(results);
             document.getElementById("result_emoji_name").innerHTML=results[0].label;
             prediction1=results[0];
             speak();
            
             if(results[0].label=="happy"){
                 document.getElementById("update_emoji").innerHTML="&#128076;";
             }
             if(results[0].label=="sad"){
                 document.getElementById("update_emoji").innerHTML="&#128077;";
             }
             if(results[0].label=="angry"){
                 document.getElementById("update_emoji").innerHTML="&#9996;";
             }
         }
     }