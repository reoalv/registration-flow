import {createReducer} from '@reduxjs/toolkit';
import {setPasswordEmail} from '../Action/Auth';

const initialState = {
  data: {},
};
const AuthReducers = createReducer(initialState, builder => {
  builder.addCase(setPasswordEmail, (state, {payload}) => {
    return {...state, data: payload};
  });
});

export default AuthReducers;
