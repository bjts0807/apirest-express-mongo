const firebaseApp = require('./firebaseApp');
const { getAuth } = require("firebase/auth");


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);

module.exports = auth;
