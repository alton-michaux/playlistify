const stateHandler = (state, action) => {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case "success":
      return {
        ...state,
        isLoading: false,
        isError: false
      };
    case "failure":
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    case 'authToken':
      return {
        ...state,
        token: action.payload
      };
    case 'user':
      return {
        ...state,
        token: action.payload
      };
    case 'token':
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
    case 'show':
      return {
        ...state,
        show: action.payload
      }
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
