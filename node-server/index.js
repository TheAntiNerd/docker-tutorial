const { config } = require('dotenv');
config();
const express = require('express');

const app = express(),
	port = process.env.PORT || 3000;

// set public directory
app.use(express.static('public'));

app.listen(port, () => console.log(`Listening to port ${3000}`));
