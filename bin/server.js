const http=require('http');
const app = require('../app');
const mongoose=require('mongoose');
const server=http.createServer(app);

const port =3000;


mongoose.connect('mongodb://127.0.0.1/membership')
.then(()=>console.log('Connected tomongodb'))
.catch((error)=>console.log(error));

//server.listen(port);

/* server.on('listening',()=>{
    console.log(`el servidor esta escuchando en el puerto ${port}`);
}) */

server.listen(port,()=>console.log('server listening on port',port));