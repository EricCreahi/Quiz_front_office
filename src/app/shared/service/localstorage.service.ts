import CryptoJS from 'crypto-js';
import { StorageKeys } from '../models';

const SECRET_KEY = 'your-secret-key'; // Clé de chiffrement

export class LocalStorageService {
  static setItem(key: StorageKeys, value: any) {
    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(value),
      SECRET_KEY
    ).toString();
    localStorage.setItem(key, encrypted);
  }

  static getItem(key: StorageKeys): any {
    const encrypted = localStorage.getItem(key);
    if (!encrypted) return null;

    try {
      const decrypted = CryptoJS.AES.decrypt(encrypted, SECRET_KEY).toString(
        CryptoJS.enc.Utf8
      );
      return JSON.parse(decrypted);
    } catch (error) {
      console.error('Error decrypting data', error);
      return null;
    }
  }

  static removeItem(key: StorageKeys) {
    localStorage.removeItem(key);
  }
}
