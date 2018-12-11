import store from 'app/store';
import { setVoice } from 'ducks/voice';

export const talk = (msg, callback) => {
  store.dispatch(setVoice(true));
  window.speechSynthesis.cancel();

  const message = new SpeechSynthesisUtterance();
  message.voice = window.speechSynthesis.getVoices().find((voice) => voice.name === 'Daniel');
  message.text = msg;
  message.rate = 10;
  message.pitch = 2;

  window.messages = [];
  window.messages.push(message);

  const endCallback = () => {
    if (callback) callback();
    store.dispatch(setVoice(false));
    message.removeEventListener('end', endCallback);
  };

  message.addEventListener('end', endCallback);

  window.speechSynthesis.speak(message);
};
