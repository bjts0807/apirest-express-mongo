const firebaseAdmin = require('./firebaseAdminApp');
const { getAuth } = require('firebase-admin/auth');

const auth = getAuth(firebaseAdmin);

async function verifyToken(token) {
    return auth.verifyIdToken(token)
}

module.exports = verifyToken;

