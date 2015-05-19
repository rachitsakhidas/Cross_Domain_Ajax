var port = 8015,
	express = require('express'),
	app = express();

app.use('/', express.static(__dirname));
app.listen(port);
console.log('Now servering http://localhost:'+port+'index.html');