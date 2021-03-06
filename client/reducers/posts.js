function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      console.log('incrementing likes');

      const i = action.index;

      // return updated state
      return [
        ...state.slice(0, i), // up to the one we are updating
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1) // after the one we are updating
      ]
      default:
        return state;

  }
  return state;
}

export default posts;
