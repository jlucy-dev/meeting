const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

const db = mysql.createConnection({
    
})

app.use(cors())


app.listen("4000", ()=>{
    console.log("동작")
})