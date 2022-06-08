import {action, makeObservable, observable} from 'mobx';
import {
  getUserNameAsyncStorage,
  isValidName,
  saveUseNameAsyncStorage,
} from '../utils';
import {Alert} from 'react-native';

export class ConfigStore {
  public userName: string;
  public isDarkMode: boolean;

  constructor() {
    this.userName = '';
    this.isDarkMode = false;
    makeObservable(this, {
      userName: observable,
      setUseName: action,
      isDarkMode: observable,
      setIsDarkMode: action,
    });
  }
  setIsDarkMode(isDarkMode: boolean) {
    this.isDarkMode = isDarkMode;
  }
  setUseName(userName: string) {
    console.log(userName);
    this.userName = userName;
  }

  public async saveUserNameAsyncStorage() {
    try {
      if (isValidName(this.userName)) {
        await saveUseNameAsyncStorage(this.userName);
        Alert.alert('user saved');
      } else {
        throw Error('name is not valid');
      }
    } catch (e) {
      console.error(e);
      Alert.alert('Please enter valid name');
    }
  }

  public async getUserName() {
    try {
      const userName = await getUserNameAsyncStorage();
      if (userName) {
        this.setUseName(userName);
      }
    } catch (error) {
      console.error(error);
    }
  }
}
