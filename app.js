const express = require('express');
const app = express();
const port= 3000;

app.get('/',(req, res) => {
	res.send('Hallo Bunny <3');
});

app.listen(port, ()=> console.log(`I am running on port ${port}!`))
