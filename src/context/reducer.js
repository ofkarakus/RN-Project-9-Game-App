export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_QUESTIONS':
      return {...state, questions: action.payload.questions};

    case 'GIVE_POINTS':
      if (action.payload.result) {
        return {...state, score: state.score + 1};
      } else {
        return {...state, score: state.score - 1};
      }

    default:
      return {...state};
  }
};
