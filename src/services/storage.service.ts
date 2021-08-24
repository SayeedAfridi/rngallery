import AsyncStorage from '@react-native-community/async-storage';
import { photosKey, themeModeKey } from '@src/constants/string.constants';
import { ThemeModeString } from '@src/types';

class _StorageService {
  async setItem(key: string, value: string): Promise<void> {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {}
  }

  async getItem(key: string): Promise<string | null> {
    try {
      const item = await AsyncStorage.getItem(key);
      return item;
    } catch (error) {
      return null;
    }
  }

  async getThemeMode(): Promise<ThemeModeString> {
    try {
      const mode = await this.getItem(themeModeKey);
      if (mode) {
        return mode as ThemeModeString;
      }
      return 'light';
    } catch (error) {
      return 'light';
    }
  }

  async setThemeMode(mode: ThemeModeString): Promise<void> {
    try {
      await this.setItem(themeModeKey, mode);
    } catch (error) {}
  }

  async savePhoto(photos: any): Promise<void> {
    try {
      await this.setItem(photosKey, JSON.stringify(photos));
    } catch (error) {}
  }

  async getPhotos(): Promise<any> {
    try {
      const data = await this.getItem(photosKey);
      if (data) {
        const dataObject = JSON.parse(data);
        return dataObject as any;
      }
      return null;
    } catch (error) {
      return null;
    }
  }
}

const storageService = new _StorageService();

export default storageService;
