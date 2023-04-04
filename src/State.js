import React, { createContext, useReducer } from 'react'
import stateHandler from './state/StateHandler'

const initialState = {
  token: {},
  genres: [],
  genre: "",
  playlists: [],
  playlist: [],
  tracklist: [],
  song: [],
  isOpen: false,
  title: "Playlist data will appear here once selected",
  image: "https://techcrunch.com/wp-content/uploads/2021/02/alexander-shatov-JlO3-oY5ZlQ-unsplash.jpg",
  songImage: "https://techcrunch.com/wp-content/uploads/2021/02/alexander-shatov-JlO3-oY5ZlQ-unsplash.jpg",
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(stateHandler, initialState)

  return (
    <Context.Provider value={[state, dispatch]} >
      {children}
    </Context.Provider >
  )
}

export const Context = createContext([initialState])

export default Store
