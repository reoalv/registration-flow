import React, {useState, useRef, ReactElement, useMemo} from 'react';
import {View, TextInput, NativeSyntheticEvent} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {TextInputKeyPressEventData} from 'react-native/Libraries/Components/TextInput/TextInput';
import {
  InputRef,
  OnChangeProps,
  Opts,
  Props,
  RefMapping,
} from './OtpCodeField.types';
import {combineStyle, styles} from './OtpCode.Field.styles';
import Constants from '../../Constants/InputStatus';

const {CODE_FIELD_VARIANT} = Constants;

const handlePaste = async (opts: Opts) => {
  const {length, onChange, refs, setCode, code, index, value} = opts;
  const hasValue = value && code[index] !== '';
  const clipboard = await Clipboard.getString();

  if (hasValue) {
    return refs.current[index + 1]?.focus();
  }

  if (!clipboard) {
    return;
  }

  const currentCode = clipboard.substring(0, length).split('');
  const endIndex = currentCode.length - 1;

  if (currentCode.length < length) {
    do {
      currentCode.push('');
    } while (currentCode.length < length);
  }

  refs!.current[endIndex < length - 1 ? endIndex + 1 : endIndex]!.focus();
  setCode(currentCode);
  onChange(currentCode.join(''));
};

const handleType = (opts: Opts) => {
  const {value, code, index, onChange, setCode, length, refs} = opts;
  const hasDeleted = !value && code[index] !== '';

  const currentCode = code.map((curr, i) => {
    if (i === index) {
      return value;
    }
    return curr;
  });

  if (!hasDeleted && index < length - 1) {
    refs.current[index + 1]?.focus();
  }

  setCode(currentCode);
  onChange(currentCode.join(''));
};

const handleChange = async (opts: Opts) => {
  const {value} = opts;

  if (value.length > 1) {
    await handlePaste(opts);
    return;
  }
  handleType(opts);
};

const getMaxLength = (index: number, length: number) => {
  const clipboard = Clipboard.getString();

  if (!clipboard || index + 1 === length) {
    return 1;
  }
};

const handleKeyPress = (
  event: NativeSyntheticEvent<TextInputKeyPressEventData>,
  index: number,
  refs: InputRef,
  code: Array<string>,
) => {
  if (event.nativeEvent.key === 'Backspace' && index !== 0 && !code[index]) {
    refs.current[index - 1]?.focus();
  }
};

const _onChangeText = (opts: OnChangeProps) => (value: string) =>
  handleChange({...opts, value});

const OtpCodeField = (props: Props): ReactElement => {
  const refs: InputRef = useRef<RefMapping>({});
  const {variant, onChange} = props;
  const length = variant === CODE_FIELD_VARIANT.FOUR_CODE ? 4 : 6;
  const [code, setCode] = useState<Array<string>>(
    Array.from({length: length}, () => ''),
  );
  const [focusedIndex, setFocusedIndex] = useState(0);

  const RenderForm = useMemo(() => {
    const opts = {refs, length, onChange, setCode, code};

    return Array.from({length}, (_, i) => i).map((_, i) => {
      const isFocused = i === focusedIndex;

      return (
        <TextInput
          onFocus={() => setFocusedIndex(i)}
          onKeyPress={e => handleKeyPress(e, i, refs, code)}
          ref={el => (refs.current[i] = el)}
          key={i.toString()}
          value={code[i]}
          maxLength={getMaxLength(i, length)}
          keyboardType="number-pad"
          onChangeText={_onChangeText({...opts, index: i})}
          style={[
            styles.input,
            isFocused ? styles.borderActive : styles.borderDefault,
            combineStyle(length).inputWidth,
            combineStyle(length).inputHeight,
          ]}
        />
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, focusedIndex, length]);

  return <View style={styles.inputsContainer}>{RenderForm}</View>;
};

export default OtpCodeField;
