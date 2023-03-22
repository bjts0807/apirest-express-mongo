const express= require('express');
const fileUpload = require('express-fileupload');
const app = express();

//configuracion de express
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(fileUpload());


app.use(require('./routes'));

app.get("/excel", (req, res) => {
    res.sendFile(__dirname + "/views/pruebaExcel.html");
});

module.exports =app;