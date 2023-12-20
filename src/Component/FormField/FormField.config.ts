import {Props} from './FormField.types';

export const emptySpaceRegex: RegExp = /^\s+/g;

export const defaultProps: Props = {
  name: 'phoneNumber',
  placeholder: 'phoneNumber',
  alwaysValidate: true,
  isRegisterRef: false,
};
