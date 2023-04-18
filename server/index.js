 // add index.js to server folder 
// write npm init to make package.json file
// install express
// install nodemon

// install npm add cors
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });


require('./db/conn');
app.use(express.json());
app.use(require('./router/auth'));


const PORT = process.env.PORT;


// middleware
const middleware = (req, res, next) => {
	console.log(`middleware`);
	next();
}




app.get('/', (req, res) => {
	res.send(`hello`);
});

// app.get('/about', (req, res) => {
// 	res.send(`About sec`);
// });

// app.get('/contact', (req, res) => {
// 	res.send(`contact sec`);
// });

app.listen(PORT, () => {
	console.log(`server is running in ${PORT}`);
});

