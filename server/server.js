const express = require('express');
//import => requires 'import react from react'
const cors = require('cors');
const apiRouter = require('./routes');
const app = express();
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', apiRouter);
app.use(express.static(path.join(__dirname, './client')))
app.listen(3000);