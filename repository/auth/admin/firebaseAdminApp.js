const config=require('../../../verificador-eps-firebase-adminsdk-f71g9-b572fddf53.json');
const { initializeApp, cert } = require('firebase-admin/app');

const admin = initializeApp({
  credential: cert(config)
});

module.exports=admin;