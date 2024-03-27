const express = require('express');
const app = express();
const db = require("./Database/database");
const mysql = require('mysql');
const cors = require('cors');

const userRoutes = require('./Routes/UserRoutes');

app.use(express.json());
app.use(
    cors({
        origin: 'http://localhost:3000/',
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
)

userRoutes(app);

app.listen(3001, () => {
    console.log('Server listen on 3001');
})