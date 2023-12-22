import {View, Text} from 'react-native';
import * as React from 'react';
import {Props, SetTimer} from './Countdown.types';
import styles from './Countdownn.styles';
import {_getFormattedCountdownTime} from '../../Utils/Countdown';

const _useHooksCountdownTimer = (
  setTimer: SetTimer,
  isReadyResend: boolean,
) => {
  //countdown function
  const setCountdown = React.useCallback(
    (setterTime: SetTimer, readyResend: boolean, interval: number) => {
      if (readyResend) {
        return () => clearInterval(interval);
      }
      setterTime(lastTimerCount => {
        return lastTimerCount - 1;
      });
    },
    [],
  );

  //countdown effect
  return React.useEffect(() => {
    const interval: any = setInterval(
      () => setCountdown(setTimer, isReadyResend, interval),
      1000,
    );

    return () => clearInterval(interval);
  }, [setCountdown, setTimer, isReadyResend]);
};

const Countdown = (props: Props) => {
  const {duration = 10} = props;
  const [timer, setTimer] = React.useState(duration);
  const isReadyResend = timer === 0;

  _useHooksCountdownTimer(setTimer, isReadyResend);

  return (
    <View style={styles.container}>
      <Text style={styles.duration}>{_getFormattedCountdownTime(timer)}</Text>
      <Text
        onPress={() => {
          setTimer(duration);
        }}
        disabled={!isReadyResend}
        style={isReadyResend ? styles.resendActive : styles.resendDisable}>
        Resend
      </Text>
    </View>
  );
};

export default Countdown;
