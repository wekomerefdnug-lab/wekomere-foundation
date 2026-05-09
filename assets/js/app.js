import {
    checkAuth,
    logout
} from "./auth.js";

// INITIALIZE APP
window.addEventListener("DOMContentLoaded", () => {

    console.log("Wekomere Initialized");

    checkAuth();

    initializeButtons();

    initializeNavigation();

});

// BUTTONS
function initializeButtons() {

    const demoButton = document.getElementById("demoButton");

    if (demoButton) {

        demoButton.addEventListener("click", () => {

            window.location.href = "pages/contact.html";

        });

    }

    const logoutButton = document.getElementById("logoutButton");

    if (logoutButton) {

        logoutButton.addEventListener("click", logout);

    }

}

// NAVIGATION
function initializeNavigation() {

    console.log("Navigation Ready");

}

// PROJECT REDIRECTS
function openProject(project) {

    const routes = {

        nerixa: "apps/nerixa.html",

        health: "apps/health.html",

        sports: "apps/sports.html",

        agriculture: "apps/agriculture.html",

        architecture: "apps/architecture.html"

    };

    if (routes[project]) {

        window.location.href = routes[project];

    }

}

// GLOBAL ACCESS
window.openProject = openProject;