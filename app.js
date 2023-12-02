const express = require('express');
const cors = require('cors');
const mysql = require('./config/mysql');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mysql.conMysql();

// app.use('/assets/img', express.static(path.join(__dirname, 'assets/img')));
app.use('/api/1.0/', require('./app/rutas'));
app.listen(PORT, ()=>{
    console.log('api escuchando en el puerto', PORT)
})