import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyCpljG06YI-BK3eNLmkc09EysNfIZJjJKw",
    authDomain: "bitebuddy-zero.firebaseapp.com",
    projectId: "bitebuddy-zero",
    storageBucket: "bitebuddy-zero.appspot.com",
    messagingSenderId: "1018932734035",
    appId: "1:1018932734035:web:4abe9747e68bbb289c3ea6",
    measurementId: "G-KXLR1PL043"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const auth = getAuth(app);

// isSupported().then((isSupported) => {
//     if (isSupported) {
//         const analytics = getAnalytics(app);
//     }
// });

export { auth }