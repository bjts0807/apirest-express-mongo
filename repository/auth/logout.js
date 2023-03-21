const { signOut } = require("firebase/auth");

const auth = require('./auth');

async function logout() {
     signOut(auth).then(() => {
         console.log("sesion terminada");
       }).catch((error) => {
         console.log(error);
       });
 }
 

module.exports =logout;