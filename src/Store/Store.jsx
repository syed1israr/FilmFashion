import { configureStore } from '@reduxjs/toolkit'
import movieReducer from "../Reducers/MovieSlice"
import TVReducer from "../Reducers/TVSlice"
import personReducer from "../Reducers/PeopleSlice"
export const store = configureStore({
  reducer: {
    movie:movieReducer,
    TV:TVReducer,
    people:personReducer,
    tv:TVReducer
  },
})