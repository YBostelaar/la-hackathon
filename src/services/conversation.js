import annyang from 'annyang';

export const initConvo = () => {
  window.speechSynthesis.cancel();
  window.speechSynthesis.onvoiceschanged = () => {
    annyang.start();
  };
};

export const addConvo = (trigger, callback) => {
  annyang.addCommands({
    [trigger]: (...params) => {
      callback(...params);
      annyang.removeCommands(trigger);
    },
  });
};
