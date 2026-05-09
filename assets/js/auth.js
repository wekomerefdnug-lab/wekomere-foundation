import {
    auth
} from "./firebase.js";

import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// LOGIN
async function login(email, password) {

    try {

        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        console.log("Login successful");

        return userCredential.user;

    } catch (error) {

        console.error(error.message);

        alert(error.message);

    }

}

// LOGOUT
async function logout() {

    try {

        await signOut(auth);

        window.location.href = "../index.html";

    } catch (error) {

        console.error(error.message);

    }

}

// CHECK USER SESSION
function checkAuth() {

    onAuthStateChanged(auth, (user) => {

        if (user) {

            console.log("Authenticated:", user.email);

        } else {

            console.log("No active session");

        }

    });

}

// PROTECT PRIVATE PAGES
function protectPage() {

    onAuthStateChanged(auth, (user) => {

        if (!user) {

            window.location.href = "../index.html";
        }

    });

}

export {
    login,
    logout,
    checkAuth,
    protectPage
};