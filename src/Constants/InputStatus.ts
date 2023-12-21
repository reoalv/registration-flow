const Constants = {
  INPUT_STATUS: {
    ACTIVE: 'active',
    ERROR: 'error',
    DEFAULT: 'default',
  } as const,
  KEYBOARD_TYPE: {
    NUMERIC: 'numeric',
    PHONE_PAD: 'phone-pad',
    NUMBER_PAD: 'number-pad',
    DEFAULT: 'default',
  } as const,
  CODE_FIELD_VARIANT: {
    FOUR_CODE: 'fourCode',
    SIX_CODE: 'sixCode',
  } as const,
};

export default Constants;
