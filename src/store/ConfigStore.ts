import {action, makeObservable, observable} from 'mobx';
import {
  getUserNameAsyncStorage,
  isValidName,
  saveUseNameAsyncStorage,
} from '../utils';
import {Alert} from 'react-native';

export class ConfigStore {
  public userName: string;

  constructor() {
    this.userName = '';
    makeObservable(this, {
      userName: observable,
      setUserName: action,
    });
  }

  setUserName(userName: string) {
    this.userName = userName;
  }

  public async saveUserNameAsyncStorage(userName: string) {
    try {
      if (isValidName(userName)) {
        await saveUseNameAsyncStorage(userName);
        this.setUserName(userName);
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
        this.setUserName(userName);
      }
    } catch (error) {
      console.error(error);
    }
  }
}
