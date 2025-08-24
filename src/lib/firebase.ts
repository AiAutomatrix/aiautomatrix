import { initializeApp, getApps } from 'firebase/app';

const firebaseConfig = {
  "projectId": "ai-automatrix-fb",
  "appId": "1:481819628946:web:289f3d3b4b902f733fdd4b",
  "storageBucket": "ai-automatrix-fb.firebasestorage.app",
  "apiKey": "AIzaSyB8IPJhICEYQgsLaWEbPgUrxICkMIvISC0",
  "authDomain": "ai-automatrix-fb.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "481819628946"
};

let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
}

export { firebaseApp };
