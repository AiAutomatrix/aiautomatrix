import { initializeApp, getApps } from 'firebase/app';

const firebaseConfig = {
  "projectId": "localspark-he2ek",
  "appId": "1:481819628946:web:289f3d3b4b902f733fdd4b",
  "storageBucket": "localspark-he2ek.firebasestorage.app",
  "apiKey": "AIzaSyB8IPJhICEYQgsLaWEbPgUrxICkMIvISC0",
  "authDomain": "localspark-he2ek.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "481819628946"
};

let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
}

export { firebaseApp };
