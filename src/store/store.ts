import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { thunk } from 'redux-thunk';

import { api } from '../api';
import { appReducer } from './app/app.store';
import { appSaga } from './saga';
// import theme from './theme';

const reduxSagaMonitorOptions = {};

const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

const reducers = combineReducers({
  // theme,
  [api.reducerPath]: api.reducer,
  app: appReducer,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['theme', 'app'],
  },
  reducers,
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        // ignoredActionPaths: [
        //   'meta.createdAt',
        //   'payload.createdAt',
        //   'createdAt',
        //   'meta.baseQueryMeta.request',
        // ],
        // ignoredPaths: ['meta.baseQueryMeta.request'],
      },
    }).concat(api.middleware, sagaMiddleware, thunk);

    // if (__DEV__ && !process.env.JEST_WORKER_ID) {
    //   const createDebugger = require('redux-flipper').default;
    //   middlewares.push(createDebugger());
    // }

    return middlewares;
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

sagaMiddleware.run(appSaga);

export const { getState, dispatch } = store;
