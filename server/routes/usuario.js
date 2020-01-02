const express = require('express');
const app = express();

app.get('/', function(req, res) {
	res.json('Hello World');
});

app.get('/user', function(req, res) {
	res.json('get usuario');
});

app.post('/user', function(req, res) {
	let body = req.body;
	if (body.nombre === undefined) {
		res.status(400).send({
			message : 'Bad Request, field name cannot be empty',
		});
	}
	res.json(body);
});

app.put('/user/:id', function(req, res) {
	let id = req.params.id;
	res.json({
		id,
	});
});

module.exports = app
