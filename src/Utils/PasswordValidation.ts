const mustContainNumber = /.*\d.*/;
const mustContainSymbols = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
const mustContainUpperCase = /.*[A-Z].*/;
const mustContainLowerCase = /.*[a-z].*/;

export const validatePassword = {
  checkNumber: (value: string) => value && mustContainNumber.test(value),
  checkSymbols: (value: string) => value && mustContainSymbols.test(value),
  checkUpperCase: (value: string) => value && mustContainUpperCase.test(value),
  checkLowerCase: (value: string) => value && mustContainLowerCase.test(value),
  checkLength: (value: string) => value && value.length >= 8,
};

const {checkSymbols, checkLength, checkLowerCase, checkUpperCase} =
  validatePassword;

export const validatePasswordWithErrorHint = {
  checkSymbolsWithHint: (value: string) =>
    checkSymbols(value) || 'Password harus mengandung Symbol',
  checkUpperCaseWithHint: (value: string) =>
    checkUpperCase(value) || 'Password harus mengandung Huruf Besar',
  checkLowerCaseWithHint: (value: string) =>
    checkLowerCase(value) || 'Password harus mengandung Huruf Kecil',
  checkLengthWithHint: (value: string) =>
    checkLength(value) || 'Password harus setidaknya 8 Karakter',
};
