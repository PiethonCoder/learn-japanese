var synth = window.speechSynthesis;


function readText(text,options) {
    
    var voice = options.voice || 5;
    var pitch = options.pitch || 1;
    var rate = options.rate || 1;
    

    setTimeout(function () {
        var voices = synth.getVoices(); //list of all voices
                
        var utterThis = new SpeechSynthesisUtterance(text); //create the voiced sentence 

        utterThis.addEventListener('error', function (event) {
            console.log("error");
            console.log(event);
        })

        utterThis.voice = voices[voice];
        utterThis.pitch = pitch;
        utterThis.rate = rate;

        synth.speak(utterThis); //speak the text

    }, 100)

}

