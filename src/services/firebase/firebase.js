import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDzbU-0JanZ_Az8CuHZ4MYrEx4BUFb2KFQ',
  authDomain: 'movie-app-77108.firebaseapp.com',
  projectId: 'movie-app-77108',
  storageBucket: 'movie-app-77108.firebasestorage.app',
  messagingSenderId: '445038098685',
  appId: '1:445038098685:web:e83184b219afa5e39b2694',
  measurementId: 'G-8FX26JPM33',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
