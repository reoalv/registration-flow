import {createAction} from '@reduxjs/toolkit';
import {SetEmailPass} from './Auth.types';

export const SAVE_PASSWORD_EMAIL = {
  SET: 'SET_SAVE_PASSWORD_EMAIL',
};

export const setPasswordEmail = createAction<SetEmailPass>(
  SAVE_PASSWORD_EMAIL.SET,
);
