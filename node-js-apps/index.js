const express = require('express');
const app = express();
const port = 8080;
app.get('/', (req, res) => {
    res.send('<h1>Simple app Docker and Node.js!</h1>');
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});