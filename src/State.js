import React, { createContext, useReducer } from 'react'
import stateHandler from './state/StateHandler'

const initialState = {
  data: {
    tokenRef: {},
    genres: [],
    genre: [],
    playlists: [],
    playlist: [],
    tracklist: [],
    song: [],
    isOpen: false,
    title: "",
    image: "",
    songImage: "",
  }, isLoading: false, isError: false
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(stateHandler, initialState)

  return (
    <Context.Provider value={[state, dispatch]} >
      {children}
    </Context.Provider >
  )
}

export const Context = createContext(initialState)

export default Store
