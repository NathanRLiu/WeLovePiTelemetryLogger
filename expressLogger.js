const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let logs = []

app.get('/', (req, res) => {
	res.send('Welcome to WeLovePi\'s Telemetry Logging Endpoint!');
})

app.get('/logs', (req, res) => {
	res.send(logs);
})

app.post('/sendTelemetry', (req, res)=>{
	logs.push({
		"time":Date.now(), //use req.time if this doesn't work well
		"logs":req.body["logs"]
	})
	res.send("Telemetry Logged.");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
