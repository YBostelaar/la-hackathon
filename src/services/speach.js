export const talk = (msg, callback) => {
  window.speechSynthesis.cancel();

  const message = new SpeechSynthesisUtterance();
  message.voice = window.speechSynthesis.getVoices().find((voice) => voice.name === 'Daniel');
  message.text = msg;
  message.rate = 1;
  message.pitch = 0.5;

  window.messages = [];
  window.messages.push(message);

  message.addEventListener('end', () => { if (callback) callback(); });
  window.speechSynthesis.speak(message);
};
