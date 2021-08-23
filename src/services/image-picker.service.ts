import { Asset, launchCamera } from 'react-native-image-picker';

class _ImagePickerService {
  async openCamera(): Promise<Asset | void> {
    try {
      const res = await this.launchCameraPromise();
      return res;
    } catch (error) {}
  }

  private launchCameraPromise(): Promise<Asset> {
    return new Promise((resolve, reject) => {
      launchCamera({ mediaType: 'photo', quality: 0.6 }, res => {
        if (res.didCancel) {
          reject('No photo selected');
        } else if (res.assets?.length) {
          resolve(res.assets[0]);
        } else if (res.errorCode) {
          reject(res.errorMessage);
        }
        reject('unknown');
      });
    });
  }
}

const imagePickerService = new _ImagePickerService();

export default imagePickerService;
