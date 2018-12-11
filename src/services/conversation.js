import annyang from 'annyang';

export const initConvo = () => {
  window.speechSynthesis.onvoiceschanged = () => {
    annyang.start();
  };
};
