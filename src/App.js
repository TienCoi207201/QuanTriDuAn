// import { createStore } from "redux";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import AppContainer from "./AppContainer";
import productSlice from "./reducers/productSlice";
import authSlice from "./reducers/authSlice";
import { PersistGate } from 'redux-persist/integration/react';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default function App() {
  const persistConfig = {
    key: 'root',
    storage: storage
  };

  const allReducers = combineReducers({
    productSlice: productSlice,
    authSlice: authSlice,
  });

  const persistedReducer = persistReducer(persistConfig, allReducers);
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        // serializableCheck: {
        //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        // },
        serializableCheck: false,
      }),
  });
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
}