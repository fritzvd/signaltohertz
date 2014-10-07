signaltohertz
=============

calculate Hertz frequency from audio buffer. Nothing more nothing less.

    // include library
    var sig2hz = require('signaltohertz');

    // input an array with frequencies.
    var hertz = sig2hz(frequencyArray);
    
    // input an array with frequencies and add a rate that
    // if yours is different to the defaults.
    var hertz = sig2hz(frequencyArray, {
        rate: 0.5
        });


You can use it with the WebAudioContext like so:
    
    
    var audio, volume, frequencies, frequency, audioContext, analyser, 
        microphone, waveform, amplitude;
    navigator.getUserMedia(
        {audio: true, video: false},
        function (stream) {
        audioContext = new AudioContext();
        analyser = audioContext.createAnalyser();
        frequencies = new Float32Array(analyser.frequencyBinCount);
        console.log(analyser)
        amplitude = new Uint8Array(analyser.frequencyBinCount);

        volume = audioContext.createGain();

        microphone = audioContext.createMediaStreamSource(stream);
        microphone.connect(volume);
        microphone.connect(analyser);

        renderFrame();
      }, function (error) { console.log(error)};

      function renderFrame () {
          setTimeout(requestAnimationFrame(renderFrame), 100);
          analyser.getFloatFrequencyData(frequencies);
          analyser.getByteTimeDomainData(amplitude);

          frequency = signaltohertz(frequencies);
          console.log(frequency);
        };