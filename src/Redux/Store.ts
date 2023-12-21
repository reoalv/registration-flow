import {UnknownAction, combineReducers} from 'redux';
import Reducers from './Reducers';
import {configureStore} from '@reduxjs/toolkit';
import Storage from '@react-native-async-storage/async-storage';
import {
  PERSIST,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';

export type AnyAction = {payload?: any; type: string};
export type AnyActionFn = (action: AnyAction | UnknownAction) => void;
export type RootState = ReturnType<typeof store.getState>;

const persistConfig = {
  key: 'root',
  storage: Storage,
};

const combineReducer = combineReducers({...Reducers});

const persistedReducer = persistReducer(persistConfig, combineReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, PERSIST, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
