import {createReducer} from '@reduxjs/toolkit';
import {setPasswordEmail} from '../Action/Auth';

export const initialState = {
  data: {
    email: '',
    password: '',
  },
};
const AuthReducers = createReducer(initialState, builder => {
  builder.addCase(setPasswordEmail, (state, {payload}) => {
    return {...state, data: payload};
  });
});

export default AuthReducers;
