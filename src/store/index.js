import { configureStore } from '@reduxjs/toolkit'
import publicReducer from '../reducers/publicReducer'

const store = configureStore({
  reducer: {
    publicer:publicReducer
  }
})

export default store