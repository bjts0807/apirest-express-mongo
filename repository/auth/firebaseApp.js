// Import the functions you need from the SDKs you need
const { initializeApp } =require("firebase/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk69xSZ2LRYVO_w25t0pWiydokk6bsvI8",
  authDomain: "verificador-eps.firebaseapp.com",
  projectId: "verificador-eps",
  storageBucket: "verificador-eps.appspot.com",
  messagingSenderId: "795298475382",
  appId: "1:795298475382:web:8263e6ae66c594213e9e57",
  measurementId: "G-D2EE57GM0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

module.exports =app;