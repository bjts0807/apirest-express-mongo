const http=require('http');
const app = require('../app');
const mongoose=require('mongoose');
const server=http.createServer(app);

server.listen(3000);

mongoose.connect('mongodb://127.0.0.1/familyTrips');

server.on('listening',()=>{
    console.log('el servidor esta escuchando en el puerto 3000');
})