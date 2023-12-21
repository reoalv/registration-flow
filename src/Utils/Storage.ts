import AsyncStorage from '@react-native-async-storage/async-storage';

export const clearAll = async () => {
  try {
    return await AsyncStorage.clear();
  } catch (err) {}
};
