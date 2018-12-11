// export const talk = (msg, callback) => {
//   window.speechSynthesis.cancel();

//   const message = new SpeechSynthesisUtterance();
//   message.voice = window.speechSynthesis.getVoices().find((voice) => voice.name === 'Daniel');
//   message.text = msg;
//   message.rate = 1;
//   message.pitch = 0.5;

//   window.messages = [];
//   window.messages.push(message);

//   message.addEventListener('end', () => { if (callback) callback(); });
//   window.speechSynthesis.speak(message);
// };

export const talk = (msg, callback) => {
  const synth = window.speechSynthesis;

  if (synth.speaking) {
    console.error('speechSynthesis.speaking');
    return;
  }

  if (msg !== '') {
    var utterThis = new SpeechSynthesisUtterance(msg);
    console.log('hoi');
    utterThis.onend = function (event) {
      console.log('ended', event);
      callback();
    };

    utterThis.onerror = function (event) {
      console.log('error');
      console.error('SpeechSynthesisUtterance.onerror');
    };

    utterThis.voice = window.speechSynthesis.getVoices().find((voice) => voice.name === 'Daniel');
    utterThis.pitch = 0.5;
    utterThis.rate = 1;

    synth.speak(utterThis);
  }
};
