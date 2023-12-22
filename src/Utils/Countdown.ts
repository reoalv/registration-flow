export const _getPad = (second: number): string =>
  second < 10 ? `0${second}` : String(second);

export const _getFormattedCountdownTime = (timer: number): string => {
  const minutes = Math.floor(timer / 60);
  const second = Math.floor(timer - minutes * 60);

  return `(${_getPad(minutes)}:${_getPad(second)})`;
};
