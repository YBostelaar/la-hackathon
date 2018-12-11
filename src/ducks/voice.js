import createAction from 'services/createAction';

const SET_VOICE = 'voice/SET';

const initialState = {
  speaking: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case SET_VOICE:
    return {
      ...state,
      speaking: payload,
    };
  default:
    return state;
  }
};

export const setVoice = createAction(SET_VOICE);
