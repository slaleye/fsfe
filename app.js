const express = require('express');
const app = express();
const port= 3000;

app.get('/',(req, res) => {
	res.send('Hallo Bunny <3');
});

app.get('/tea',(req, res) => {
	res.set('X-energy-type','love');
	res.status(418);
	res.send('This tea is full of love');
});

app.listen(port, ()=> console.log(`I am running on port ${port}!`))
