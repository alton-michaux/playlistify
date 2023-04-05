const stateHandler = (state, action) => {
  switch (action.type) {
    case 'token':
      console.log('reducer - token', action.payload)
      return {
        ...state,
        token: action.payload
      };
    case 'genres':
      return {
        ...state,
        genres: action.payload
      };
    case 'genre':
      return {
        ...state,
        genre: action.payload
      };
    case 'playlists':
      return {
        ...state,
        playlists: action.payload
      };
    case 'playlist':
      return {
        ...state,
        playlist: action.payload
      };
    case 'tracklist':
      return {
        ...state,
        tracklist: action.payload
      };
    case 'song':
      return {
        ...state,
        song: action.payload
      };
    case 'isOpen':
      return {
        ...state,
        isOpen: action.payload
      };
    case 'title':
      return {
        ...state,
        title: action.payload
      };
    case 'image':
      return {
        ...state,
        image: action.payload
      };
    case 'songImage':
      return {
        ...state,
        songImage: action.payload
      };
    default:
      return state
  }
}

export default stateHandler
