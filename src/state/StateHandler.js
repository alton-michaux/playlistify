const stateHandler = (state, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case 'ERROR':
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      const playlists = JSON.parse(localStorage.getItem('playlists'))
      if (playlists) {
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: playlists
        };
      } else {
        return {
          ...state,
          isLoading: true,
          isError: false
        }
      }
  }
}

export default stateHandler
