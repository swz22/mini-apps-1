const express = require('express');
const app = express();
const port = 3000;
const router = require('./router')
const path = require('path');

app.use('/api', router);

app.use(express.static(path.join(__dirname, 'public')))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

