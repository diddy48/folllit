// plugins/firebase.client.ts
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig().public;

  const firebaseConfig = {
    apiKey: config.firebaseApiKey,
    authDomain: config.firebaseAuthDomain,
    projectId: config.firebaseProjectId,
    storageBucket: config.firebaseStorageBucket,
    messagingSenderId: config.firebaseMessagingSenderId,
    appId: config.firebaseAppId,
    measurementId: config.firebaseMeasurementId,
    
  };

  // Ensure Firebase is only initialized once
  let app;
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  }else{
    app = getApps()[0];
  }

  let analytics;
  if (import.meta.client) {
    analytics = getAnalytics(app);
  }

  const auth = getAuth(app);
  const firestore = getFirestore(app);
  const storage = getStorage(app);

  return {
    provide: {
      auth,
      firestore,
      storage,
    },
  };
});
