const express = require('express');
const app = express();
const port = process.env.PORT || process.env.VCAP_APP_PORT || 8081;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log('Example app is listening on port ' + port);
});