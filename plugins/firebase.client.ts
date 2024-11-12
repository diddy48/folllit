// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {/* 
        apiKey: config.apiKeyFirebase,
        authDomain: config.authDomain,
        projectId: config.projectId,
        storageBucket: config.storageBucket,
        messagingSenderId: config.messagingSenderId,
        appId: config.appId,
        measurementId: config.measurementId */
        apiKey: "AIzaSyBlwNTES0jBDqVKbwPTcEMMtjp5I4VmZIE",
        authDomain: "folllit.firebaseapp.com",
        projectId: "folllit",
        storageBucket: "folllit.firebasestorage.app",
        messagingSenderId: "489241988958",
        appId: "1:489241988958:web:3587ad4fa427cc78c209cf",
        measurementId: "G-VX67VQZCQB"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    const auth = getAuth(app)
    const firestore = getFirestore(app)

    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)

    nuxtApp.vueApp.provide('firestore', firestore)
    nuxtApp.provide('firestore', firestore)
})