const { signInWithEmailAndPassword } = require("firebase/auth");
const auth = require('./auth');


async function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}



module.exports = signIn