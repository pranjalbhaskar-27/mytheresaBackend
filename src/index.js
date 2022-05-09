

const express = require('express');
const app = express();

app.use(express.json());

const homepageController=require('./controller/homepage.controller')
app.use('/womensdata1',homepageController);

module.exports=app;