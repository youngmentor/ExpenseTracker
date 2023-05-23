import { configureStore } from '@reduxjs/toolkit'
import myexpenses from './Features'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'

const persistConfig = {
  key: "root",
  version: 1,
  storage
}

const reducer = combineReducers({
  Expenses: myexpenses,
})

const persistedReducer = persistReducer(persistConfig, reducer)


export const Store = configureStore({
  reducer: persistedReducer,
})