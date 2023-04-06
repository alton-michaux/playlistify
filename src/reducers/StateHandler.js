const stateHandler = (state, action) => {
  switch (action.type) {
    case "isLoading":
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case "isError":
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    case 'token':
      return {
        ...state,
        token: action.payload,
        isLoading: false,
        isError: false
      };
    case 'genres':
      return {
        ...state,
        genres: action.payload,
        isLoading: false,
        isError: false
      };
    case 'genre':
      return {
        ...state,
        genre: action.payload,
        isLoading: false,
        isError: false
      };
    case 'playlists':
      return {
        ...state,
        playlists: action.payload,
        isLoading: false,
        isError: false
      };
    case 'playlist':
      return {
        ...state,
        playlist: action.payload,
        isLoading: false,
        isError: false
      };
    case 'tracklist':
      return {
        ...state,
        tracklist: action.payload,
        isLoading: false,
        isError: false
      };
    case 'song':
      return {
        ...state,
        song: action.payload,
        isLoading: false,
        isError: false
      };
    case 'isOpen':
      return {
        ...state,
        isOpen: action.payload,
        isLoading: false,
        isError: false
      };
    case 'title':
      return {
        ...state,
        title: action.payload,
        isLoading: false,
        isError: false
      };
    case 'image':
      return {
        ...state,
        image: action.payload,
        isLoading: false,
        isError: false
      };
    case 'songImage':
      return {
        ...state,
        songImage: action.payload,
        isLoading: false,
        isError: false
      };
    default:
      return state
  }
}

export default stateHandler
