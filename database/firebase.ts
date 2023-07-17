// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Initialize Firebase
function initializeAppIfNecessary() {
  try {
    return getApp();
  } catch (any) {
    const firebaseConfig = {
      apiKey: 'AIzaSyA8AHr92mu8zClTt7g6YRDPmPnHtJt4TSw',
      authDomain: 'auth-83f60.firebaseapp.com',
      projectId: 'auth-83f60',
      storageBucket: 'auth-83f60.appspot.com',
      messagingSenderId: '901622044476',
      appId: '1:901622044476:web:7df805cb071346d29f7039',
    };
    return initializeApp(firebaseConfig);
  }
}
const app = initializeAppIfNecessary();
export const auth = getAuth(app);
export const storage = getStorage(app);
