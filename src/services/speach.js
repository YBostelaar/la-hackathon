export const talk = (msg, callback, seconds = 5000) => {
  const synth = window.speechSynthesis;

  if (synth.speaking) {
    console.error('speechSynthesis.speaking');
    return;
  }

  if (msg !== '') {
    var utterThis = new SpeechSynthesisUtterance(msg);

    if (callback) {
      const timeoutFunc = () => callback();

      setTimeout(() => {
        timeoutFunc();
        clearTimeout(timeoutFunc);
      }, seconds);
    }

    utterThis.onerror = function (event) {
      console.error('SpeechSynthesisUtterance.onerror', event);
    };

    utterThis.voice = window.speechSynthesis.getVoices().find((voice) => voice.name === 'Daniel');
    utterThis.pitch = 0.5;
    utterThis.rate = 1;

    synth.speak(utterThis);
  }
};
