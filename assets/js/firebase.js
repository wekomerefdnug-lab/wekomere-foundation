import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// FIREBASE CONFIG
const firebaseConfig = {

    apiKey: "AIzaSyDSsLRVeVeFsYmMYjr2oB8IsLQmT8ZcFzk",
    authDomain: "wekomere-foundation.firebaseapp.com",
    projectId: "wekomere-foundation",
    storageBucket: "wekomere-foundation.firebasestorage.app",
    messagingSenderId: "888670698435",
    appId: "1:888670698435:web:494b854f73396d3a095b76",
    measurementId: "G-PKYGH3QTVB"

};

// INITIALIZE FIREBASE
const app = initializeApp(firebaseConfig);

// SERVICES
const auth = getAuth(app);

const db = getFirestore(app);

// EXPORTS
export {
    auth,
    db
};